const { User, Post, Comment, Profile } = require('../models');

exports.index = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.render('users/index', { users });
  } catch (e) { next(e); }
};

exports.show = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: ['profile', 'posts', 'comments'],
    });
    if (!user) return res.status(404).send('User not found');
    res.render('users/show', { user });
  } catch (e) { next(e); }
};

exports.posts = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send('User not found');
    const posts = await Post.findAll({ where: { user_id: req.params.id } });
    res.render('users/posts', { user, posts });
  } catch (e) { next(e); }
};

exports.comments = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send('User not found');
    const comments = await Comment.findAll({ where: { user_id: req.params.id }, include: ['post'] });
    res.render('users/comments', { user, comments });
  } catch (e) { next(e); }
};

exports.createForm = (req, res) => res.render('users/create');

exports.store = async (req, res, next) => {
  try {
    await User.create(req.body);
    res.redirect('/users');
  } catch (e) { next(e); }
};
