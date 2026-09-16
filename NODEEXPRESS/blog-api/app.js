const express = require('express');
const path = require('path');
const logger = require('morgan');
const createError = require('http-errors');

const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const userApiRouter = require('./routes/userApi');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));   // bắt buộc để đọc form POST
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.redirect('/users'));
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);
app.use('/api/users', userApiRouter);

// 404
app.use((req, res, next) => next(createError(404)));

app.locals.fmtDate = (v) => {
  if (!v) return '-';
  const d = v instanceof Date ? v : new Date(v);
  return isNaN(d) ? '-' : d.toISOString().slice(0, 10);
};
// error handler — 4 tham số
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;