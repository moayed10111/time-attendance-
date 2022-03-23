
const express = require('express');
const app = express();
const users = require('./routes/users');
const roles = require('./routes/roles');
const attendance_type = require('./routes/attendance_type');
const branches = require('./routes/branches');
const shifts = require('./routes/shifts');
const { verifyToken } = require('./middleware/auth');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const publicRoutes = ['/auth/login', '/auth/signup']
app.use((req, res, next) => {
  if (publicRoutes.includes(req.originalUrl)) {
    next();
  }
  else {
    const { headers: { authorization } } = req;
    const token = authorization.split(" ");
    const verifiedToken = verifyToken(token[1]);
    req.user = verifiedToken;
    next()

  }
})
app.use('/auth', users);
app.use('/auth', roles);
app.use('/auth', attendance_type);
app.use('/auth', branches);
app.use('/auth', shifts);
app.listen(3000, console.log('started'));
