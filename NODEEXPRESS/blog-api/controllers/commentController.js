'use strict';
const createError = require('http-errors');
const { User, Profile, Post, Comment } = require('../models');

// GET /comments
exports.index = async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      include: [
        { model: User, as: 'author', attributes: ['id', 'name', 'email'] },
        { model: Post, as: 'post',   attributes: ['id', 'content'] },
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
    const comment = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'author',
          include: [
            { model: Profile, as: 'profile' },
            { model: Post,    as: 'posts' },
            { model: Comment, as: 'comments' },
          ],
        },
      ],
    });

    if (!comment) return next(createError(404, 'Comment not found'));
    if (!comment.author) return next(createError(404, 'User not found'));

    res.render('users/show', {
      title: `User of comment #${comment.id}`,
      user: comment.author,
      fromComment: comment,
    });
  } catch (err) {
    next(err);
  }
};