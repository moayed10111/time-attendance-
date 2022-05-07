const express = require('express');

const router = express.Router();

const { getUserShift, addUsersShifts, allUsersShifts, updateUserShifts, deleteUserShifts } = require('../controller/users_shifts');

router.post('/userShift', async (req, res, next) => {
    try {
        const { body } = req;
        const addedUsersShifts = await addUsersShifts(body);
        res.status(200).json({ addedUsersShifts });
    } catch (error) {
        next(error);
    }
});

router.get('/userShift/:id', async (req, res, next) => {
    try {
        const userShift = await getUserShift(req.params.id);
        res.status(200).json({ userShift });
    } catch (error) {
        next(error);
    }
})

router.get('/userShifts', async (req, res, next) => {
    try {
        const allShifts = await allUsersShifts();
        res.status(200).json({ allShifts });
    } catch (error) {
        next(error);
    }
})

router.put('/userShift/:id', async (req, res, next) => {
    try {
        const updatedUserShifts = await updateUserShifts(req.params.id, req.body);
        res.status(200).json({updatedUserShifts});
    } catch (error) {
        next(error);
    }
})

router.delete('/userShift/:id', async(req, res, next)=>{
    try {
        const deletedUserShifts = await deleteUserShifts(req.params.id, req.body);
        res.status(200).json({deletedUserShifts});
    } catch (error) {
        next(error);
    }
})


module.exports = router;