'use strict';
const bcrypt = require('bcrypt');
const createError = require('http-errors');
const { User, Profile, Post, Comment } = require('../models');

// GET /users
exports.index = async (req, res, next) => {
  try {
    const users = await User.findAll({
      order: [['id', 'ASC']],
    });
    res.render('users/index', { title: 'Users', users });
  } catch (err) {
    next(err);
  }
};

// GET /users/:id
exports.show = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        { model: Profile, as: 'profile' },
        {
          model: Post,
          as: 'posts',
          include: [{ model: Comment, as: 'comments' }],
        },
        { model: Comment, as: 'comments' },
      ],
      order: [
        [{ model: Post, as: 'posts' }, 'id', 'ASC'],
        [{ model: Comment, as: 'comments' }, 'id', 'ASC'],
      ],
    });

    if (!user) return next(createError(404, 'User not found'));

    res.render('users/show', { title: `User #${user.id}`, user });
  } catch (err) {
    next(err);
  }
};

// GET /users/:id/posts
exports.posts = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [{ model: Post, as: 'posts' }],
      order: [[{ model: Post, as: 'posts' }, 'id', 'ASC']],
    });

    if (!user) return next(createError(404, 'User not found'));

    res.render('users/posts', {
      title: `Posts of ${user.name}`,
      user,
      posts: user.posts,
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

    const comments = await Comment.findAll({
      where: { user_id: user.id },
      include: [{ model: Post, as: 'post', attributes: ['id', 'content'] }],
      order: [['id', 'ASC']],
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
  res.render('users/create', {
    title: 'Create user',
    errors: [],
    old: {},
  });
};

// POST /users
exports.store = async (req, res, next) => {
  const { name, age, email, password, birthday, status } = req.body;

  try {
    const errors = [];
    if (!name)     errors.push('Name is required');
    if (!email)    errors.push('Email is required');
    if (!password) errors.push('Password is required');
    if (password && password.length < 6) errors.push('Password must be at least 6 characters');

    if (email) {
      const existed = await User.findOne({ where: { email } });
      if (existed) errors.push('Email already exists');
    }

    if (errors.length) {
      return res.status(422).render('users/create', {
        title: 'Create user',
        errors,
        old: req.body,
      });
    }

    await User.create({
      name,
      age: age ? Number(age) : null,
      email,
      password: await bcrypt.hash(password, 10),
      birthday: birthday || null,
      status: status !== undefined ? Number(status) : 1,
    });

    res.redirect('/users');
  } catch (err) {
    next(err);
  }
};