
const express = require('express');
const newRole = require('../controller/roles');
const app = express();
const addUser = require('../controller/users');



app.post('/addUser', async (req, res, next) => {
    try {
        const creatUser = await addUser();
        res.status(200).json("ok")
    } catch (error) {
        next(error);
    }
});

app.post('/addRole', (req, res, next) => {
    try {
        newRole();
        res.status(200).json("ok")
    } catch (error) {
        next(error)
    }

})
module.exports = app;



