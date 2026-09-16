const { Comment, User } = require('../models');

exports.index = async (req, res, next) => {
  try {
    const comments = await Comment.findAll({ include: ['author', 'post'] });
    res.render('comments/index', { comments });
  } catch (e) { next(e); }
};

exports.showUser = async (req, res, next) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return res.status(404).send('Comment not found');
    const user = await User.findByPk(comment.user_id, {
      include: ['profile', 'posts', 'comments'],
    });
    if (!user) return res.status(404).send('User not found');
    res.render('users/show', { user });
  } catch (e) { next(e); }
};