
const express = require('express');
const app = express();
const users=require('./routes/users');
const roles= require('./routes/roles')
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/auth',users);
app.use('/auth',roles);
app.listen(3000, console.log('started'));
