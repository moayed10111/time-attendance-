const express = require('express');
const { addUser, getUser, allUsers, login, updateUser, deleteUser } = require('../controller/users');
const router = express.Router();


router.post('/signup', async (req, res, next) => {
    try {
        const { body } = req;

        const createdUser = await addUser(body);
        res.status(200).json({ createdUser })
    } catch (error) {
      
        next(error)
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const { body } = req;
        const userLogin = await login(body);
        res.status(200).json({ userLogin })
    } catch (error) {
        next(error)
    }
});


router.get('/users', async (req, res, next) => {
    try {
        const users = await allUsers();
        res.status(200).json({ users })

    } catch (error) {
        next(error)
    }
});

router.get('/user', async(req,res,next)=>{
    try {
        const user = await getUser(req.body);
        res.status(200).json({user})
    } catch (error) {
        next(error)
    }
})

router.put('/user/:id', async (req, res, next) => {
    try {
        const users = await updateUser(req.params.id, req.body);
        res.status(200).json({ users })
    } catch (err) {
        next(err)
    }
});

router.delete('/user/:id', async(req, res, next)=>{
    try {
        const users = await deleteUser(req.params.id);
        res.status(200).json({users})
    } catch (error) {
        next(err)
    }
});
module.exports = router;