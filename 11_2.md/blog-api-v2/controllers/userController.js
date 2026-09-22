'use strict';
const { Op } = require('sequelize');
const { User } = require('../models');

const PAGE_SIZE = 5;

// GET /users
exports.index = async (req, res, next) => {
  try {
    const q = (req.query.q || '').trim();
    const where = q ? { name: { [Op.like]: `%${q}%` } } : undefined;

    const total = await User.count({ where });
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    const page = Math.min(Math.max(1, parseInt(req.query.page, 10) || 1), totalPages);

    const users = await User.findAll({
      where,
      order: [['id', 'ASC']],
      limit: PAGE_SIZE,
      offset: (page - 1) * PAGE_SIZE,
    });

    res.render('users/index', { title: 'Users', users, q, page, totalPages, total });
  } catch (err) {
    next(err);
  }
};
