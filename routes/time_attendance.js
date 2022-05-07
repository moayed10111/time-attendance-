const express = require('express');

const router = express.Router();

const { addTimeAttendance, getTmieAttendance, getAllTimeAttendance, deleteTimeAttendance, updateTimeAttendance} = require('../controller/time_attendance');

router.post('/timeAttendance', async (req, res, next) => {
    try {
        const { body } = req;
        const createdTimeAttendance = await addTimeAttendance(body);
        res.status(200).json({ createdTimeAttendance });

    } catch (error) {
        next(error);
    }

})

router.get('/timeAttendance/:id', async (req, res, next) => {
    try {
        const timeAttendance = await getTmieAttendance(req.params.id);
        res.status(200).json({ timeAttendance });
    } catch (error) {
        next(error);
    }
})

router.get('/timeAttendances', async (req, res, next) => {
    try {
        const allTimeAttendance = await getAllTimeAttendance();
        res.status(200).json({ allTimeAttendance });
    } catch (error) {
        next(error);
    }
})

router.delete('/timeAttendance/:id', async (req, res, next) => {
    try {
        const deletedTimeAttendance = await deleteTimeAttendance(req.params.id, req.body);
        res.status(200).json({ deletedTimeAttendance });
    } catch (error) {
        next(error);
    }
})
// I cant update the table because it contains Forgin Keys unless Im using the correct numbers
router.put('/timeAttendance/:id', async(req, res, next)=>{
    try {
        const updatedTimeAttendance = await updateTimeAttendance(req.params.id, req.body);
        res.status(200).json({updatedTimeAttendance});
    } catch (error) {
        next(error);
    }
})

module.exports = router;