const express = require('express');
const { addUser, getUser, allUsers } = require('../controller/users');
const router = express.Router();


router.post('/users', async (req, res, next) => {
    try {
        const { body } = req;

        const createdUser = await addUser(body);
        res.status(200).json({ createdUser })
    } catch (error) {
        next(error)
    }
});

router.get('/user', async (req, res, next) => {
    try {
        const { query } = req;
        const user = await getUser(query);
        res.status(200).json({ user })
    } catch (error) {
        next(error)
    }

});

router.get('/users', async(req, res, next)=>{
    try {
        const {query} = req;
        const users = await allUsers();
        res.status(200).json({users})
    
    } catch (error) {
        next(error)
    }
})


module.exports = router;