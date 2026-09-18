'use strict';
const bcrypt = require('bcrypt');
const createError = require('http-errors');
const { Op } = require('sequelize');
const { User } = require('../models');

const SORT_FIELDS = ['name', 'age', 'postsCount', 'commentsCount'];
const PAGE_SIZE = 5;

// GET /users
exports.index = async (req, res, next) => {
  try {
    const q = (req.query.q || '').trim();
    const where = q ? { name: { [Op.like]: `%${q}%` } } : undefined;

    const sort = SORT_FIELDS.includes(req.query.sort) ? req.query.sort : 'name';
    const dir = req.query.dir === 'desc' ? 'desc' : 'asc';

    const users = await User.findAll({ where, order: [['id', 'ASC']] });

    // Đếm posts/comments qua quan hệ thay vì query thủ công
    let usersWithCounts = await Promise.all(
      users.map(async (user) => {
        const [postsCount, commentsCount] = await Promise.all([
          user.countPosts(),
          user.countComments(),
        ]);
        return { ...user.get({ plain: true }), postsCount, commentsCount };
      })
    );

    // Sắp xếp — bao gồm cả 2 cột tổng hợp postsCount/commentsCount vốn không có sẵn ở tầng SQL
    usersWithCounts.sort((a, b) => {
      const va = a[sort];
      const vb = b[sort];
      const cmp = typeof va === 'string' ? va.localeCompare(vb) : (va ?? -Infinity) - (vb ?? -Infinity);
      return dir === 'desc' ? -cmp : cmp;
    });

    // Phân trang
    const total = usersWithCounts.length;
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    const page = Math.min(Math.max(1, parseInt(req.query.page, 10) || 1), totalPages);
    const paged = usersWithCounts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    res.render('users/index', {
      title: 'Users',
      users: paged,
      q, sort, dir,
      page, totalPages, total,
    });
  } catch (err) {
    next(err);
  }
};

// GET /users/:id
exports.show = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return next(createError(404, 'User not found'));

    // Lấy dữ liệu liên quan qua quan hệ
    const [profile, posts, comments] = await Promise.all([
      user.getProfile(),
      user.getPosts({
        order: [['id', 'ASC']],
        include: [{ association: 'comments' }],
      }),
      user.getComments({
        order: [['id', 'ASC']],
        include: [{ association: 'post' }],
      }),
    ]);

    res.render('users/show', {
      title: `User #${user.id}`,
      user,
      profile,
      posts,
      comments,
    });
  } catch (err) {
    next(err);
  }
};

// GET /users/:id/posts
exports.posts = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return next(createError(404, 'User not found'));

    const posts = await user.getPosts({ order: [['id', 'ASC']] });

    res.render('users/posts', {
      title: `Posts of ${user.name}`,
      user,
      posts,
    });
  } catch (err) {
    next(err);
  }
};

// GET /users/:id/comments
exports.comments = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return next(createError(404, 'User not found'));

    const comments = await user.getComments({
      order: [['id', 'ASC']],
      include: [{ association: 'post', attributes: ['id', 'content'] }],
    });

    res.render('users/comments', {
      title: `Comments of ${user.name}`,
      user,
      comments,
    });
  } catch (err) {
    next(err);
  }
};

// GET /users/create
exports.createForm = (req, res) => {
  res.render('users/create', { title: 'Create user', errors: [], old: {} });
};

// POST /users
exports.store = async (req, res, next) => {
  const { name, age, email, password, birthday, status, address, tel, province } = req.body;

  try {
    const errors = [];
    if (!name)     errors.push('Name is required');
    if (!email)    errors.push('Email is required');
    if (!password) errors.push('Password is required');
    if (password && password.length < 6) errors.push('Password must be at least 6 characters');
    if (email && await User.findOne({ where: { email } })) errors.push('Email already exists');

    if (errors.length) {
      return res.status(422).render('users/create', {
        title: 'Create user', errors, old: req.body,
      });
    }

    const user = await User.create({
      name,
      age: age ? Number(age) : null,
      email,
      password: await bcrypt.hash(password, 10),
      birthday: birthday || null,
      status: status !== undefined ? Number(status) : 1,
    });

    // Tạo profile qua quan hệ — Sequelize tự gán user_id
    if (address || tel || province) {
      await user.createProfile({ address, tel, province });
    }

    res.redirect('/users');
  } catch (err) {
    next(err);
  }
};