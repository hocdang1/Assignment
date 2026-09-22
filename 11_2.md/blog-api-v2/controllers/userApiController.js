'use strict';
const bcrypt = require('bcrypt');
const { User } = require('../models');

// POST /api/users
exports.store = async (req, res, next) => {
  try {
    const { name, age, email, password } = req.body;

    const errors = [];
    if (!name)     errors.push('Name is required');
    if (!email)    errors.push('Email is required');
    if (!password) errors.push('Password is required');
    if (password?.length < 6) errors.push('Password min 6 chars');
    if (email && await User.findOne({ where: { email } }))
      errors.push('Email already exists');

    if (errors.length) return res.status(422).json({ errors });

    const user = await User.create({
      name,
      age: age ? Number(age) : null,
      email,
      password: await bcrypt.hash(password, 10),
    });

    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
};

// PUT /api/users/:id
exports.update = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });

    const { name, age, email } = req.body;
    await user.update({ name, age: age ? Number(age) : null, email });

    res.json({ user });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/users/:id
exports.destroy = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });

    await user.destroy();
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};