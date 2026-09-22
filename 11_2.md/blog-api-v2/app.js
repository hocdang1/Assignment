const express = require('express');
const path = require('path');

const createError = require('http-errors');

const usersRouter = require('./routes/users');
const userApiRouter = require('./routes/userApi');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => res.redirect('/users'));
app.use('/users', usersRouter);
app.use('/api/users', userApiRouter);

app.use((req, res, next) => next(createError(404)));

app.use((err, req, res, next) => {
  const status = err.status || 500;
  if (status >= 500) console.error(err);

  if (req.originalUrl.startsWith('/api/')) {
    return res.status(status).json({ errors: [err.expose ? err.message : 'Internal Server Error'] });
  }

  res.status(status).render('error', {
    title: 'Error',
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});

module.exports = app;
