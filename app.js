
const express = require('express');
const app = express();
const users = require('./routes/users');
const roles = require('./routes/roles');
const attendance_type = require('./routes/attendance_type');
const branches = require('./routes/branches');
const shifts = require('./routes/shifts');
const time_attendance = require('./routes/time_attendance');
const users_shifts = require('./routes/users_shifts')
const { verifyToken } = require('./middleware/auth');
const clientError = require('./middleware/error_handler');
const router = require('./routes/users');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const publicRoutes = ['auth','docs']
app.use((req, res, next) => {
   const url=req.originalUrl.split("/");
   const baseUrl=url[1];
  if (publicRoutes.includes(baseUrl)) {
    next();
  }
  else {
    const { headers: { authorization } } = req;
    const token = authorization.split(" ");
    const verifiedToken = verifyToken(token[1]);
    req.user = verifiedToken;
    next()

  }
});
router.use(clientError);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/auth', users);
app.use('/userRoles', roles);
app.use('/attendanceType', attendance_type);
app.use('/branches', branches);
app.use('/shifts', shifts);
app.use('/attendance', time_attendance);
app.use('/userShift', users_shifts);
app.listen(3000, console.log('http://localhost:3000'));


