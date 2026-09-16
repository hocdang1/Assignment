'use strict';
const bcrypt = require('bcrypt');
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
