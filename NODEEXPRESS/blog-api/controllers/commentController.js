'use strict';
const createError = require('http-errors');
const { Comment } = require('../models');

// GET /comments
exports.index = async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      include: [
        { association: 'author', attributes: ['id', 'name', 'email'] },
        { association: 'post',   attributes: ['id', 'content'] },
      ],
      order: [['id', 'ASC']],
    });

    res.render('comments/index', { title: 'Comments', comments });
  } catch (err) {
    next(err);
  }
};

// GET /comments/:id/user
exports.user = async (req, res, next) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return next(createError(404, 'Comment not found'));

    // Đi ngược từ comment về user qua quan hệ belongsTo
    const user = await comment.getAuthor();
    if (!user) return next(createError(404, 'User not found'));

    const [profile, posts, comments] = await Promise.all([
      user.getProfile(),
      user.getPosts({ order: [['id', 'ASC']] }),
      user.getComments({ order: [['id', 'ASC']] }),
    ]);

    res.render('users/show', {
      title: `User of comment #${comment.id}`,
      user,
      profile,
      posts,
      comments,
      fromComment: comment,
    });
  } catch (err) {
    next(err);
  }
};