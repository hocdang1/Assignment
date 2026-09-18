'use strict';
const bcrypt = require('bcrypt');
const createError = require('http-errors');
const { Op } = require('sequelize');
const { User } = require('../models');

// Không trả password ra JSON dù defaultScope đã loại trừ, phòng khi instance
// được tạo mới (create) và còn giữ giá trị đó trong bộ nhớ.
function toPublicUser(user) {
  const { password, ...rest } = user.get({ plain: true });
  return rest;
}

function validate(body, { isUpdate = false } = {}) {
  const errors = [];
  const { name, email, password } = body;
  if (!name) errors.push('Name is required');
  if (!email) errors.push('Email is required');
  if (!isUpdate && !password) errors.push('Password is required');
  if (password && password.length < 6) errors.push('Password must be at least 6 characters');
  return errors;
}

// GET /users/create
exports.createForm = (req, res) => {
  res.render('users/create', { title: 'Create user' });
};

// POST /users (form submit)
exports.store = async (req, res, next) => {
  try {
    const { name, age, email, password, birthday } = req.body;

    const errors = validate(req.body);
    if (errors.length) return next(createError(422, errors.join(', ')));

    await User.create({
      name,
      age: age ? Number(age) : null,
      email,
      password: await bcrypt.hash(password, 10),
      birthday: birthday || null,
      status: 1,
    });

    res.redirect('/users');
  } catch (err) {
    next(err);
  }
};

// GET /users
exports.index = async (req, res, next) => {
  try {
    const q = (req.query.q || '').trim();
    const allowedSort = ['name', 'age', 'postsCount', 'commentsCount'];
    const sort = allowedSort.includes(req.query.sort) ? req.query.sort : 'name';
    const dir = req.query.dir === 'desc' ? 'desc' : 'asc';
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const perPage = 10;

    const users = await User.findAll({
      where: q ? { name: { [Op.like]: `%${q}%` } } : undefined,
      include: ['posts', 'comments'],
      order: [['id', 'ASC']],
    });

    const rows = users.map((user) => {
      const plain = user.get({ plain: true });
      return {
        ...plain,
        postsCount: plain.posts ? plain.posts.length : 0,
        commentsCount: plain.comments ? plain.comments.length : 0,
      };
    });

    rows.sort((a, b) => {
      let av = a[sort];
      let bv = b[sort];
      if (typeof av === 'string') av = av.toLowerCase();
      if (typeof bv === 'string') bv = bv.toLowerCase();
      if (av == null) av = '';
      if (bv == null) bv = '';
      if (av < bv) return dir === 'asc' ? -1 : 1;
      if (av > bv) return dir === 'asc' ? 1 : -1;
      return 0;
    });

    const total = rows.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    const currentPage = Math.min(page, totalPages);
    const paged = rows.slice((currentPage - 1) * perPage, currentPage * perPage);

    res.render('users/index', {
      title: 'Users',
      users: paged,
      q,
      sort,
      dir,
      page: currentPage,
      totalPages,
      total,
    });
  } catch (err) {
    next(err);
  }
};

// GET /users/:id
exports.show = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: ['profile', 'posts', 'comments'],
    });
    if (!user) return next(createError(404, 'User not found'));

    res.render('users/show', { title: user.name, user });
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

    res.render('users/posts', { title: `Posts of ${user.name}`, user, posts });
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
      include: ['post'],
      order: [['id', 'ASC']],
    });

    res.render('users/comments', { title: `Comments of ${user.name}`, user, comments });
  } catch (err) {
    next(err);
  }
};

// POST /api/users
exports.create = async (req, res, next) => {
  try {
    const { name, age, email, password, birthday, status } = req.body;

    const errors = validate(req.body);
    if (email && (await User.findOne({ where: { email } }))) {
      errors.push('Email already exists');
    }
    if (errors.length) return res.status(422).json({ errors });

    const user = await User.create({
      name,
      age: age ? Number(age) : null,
      email,
      password: await bcrypt.hash(password, 10),
      birthday: birthday || null,
      status: status !== undefined ? Number(status) : 1,
    });

    res.status(201).json({ user: toPublicUser(user) });
  } catch (err) {
    next(err);
  }
};

// PUT /api/users/:id
exports.update = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ errors: ['User not found'] });

    const { name, age, email, password, birthday, status } = req.body;

    const errors = validate(req.body, { isUpdate: true });
    if (email) {
      const existed = await User.findOne({ where: { email, id: { [Op.ne]: user.id } } });
      if (existed) errors.push('Email already exists');
    }
    if (errors.length) return res.status(422).json({ errors });

    const updateData = {
      name,
      age: age ? Number(age) : null,
      email,
      birthday: birthday || null,
      status: status !== undefined ? Number(status) : user.status,
    };
    if (password) updateData.password = await bcrypt.hash(password, 10);

    await user.update(updateData);

    res.json({ user: toPublicUser(user) });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/users/:id
exports.remove = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ errors: ['User not found'] });

    // Profile/posts/comments của user bị xóa theo qua ON DELETE CASCADE
    // đã khai báo ở migration, không cần xóa thủ công từng bảng.
    await user.destroy();

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
