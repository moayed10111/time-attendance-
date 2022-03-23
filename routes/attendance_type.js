const express = require('express');

const router = express.Router();

const { addAttendType, getAttendType, allAttendTypes, updateAttendType, deleteAttendType } = require('../controller/attendance_type')

router.post('/attendanceType', async (req, res, next) => {
    try {
        const { body } = req;
        const createdRoleType = await addAttendType(body);
        res.status(200).json({ createdRoleType });
    } catch (error) {
        next(error);
    }
})

router.get('/attendanceType/:id', async (req, res, next) => {
    try {
        const roleType = await getAttendType(req.params.id);
        res.status(200).json({ roleType });
    } catch (error) {
        next(error);
    }
})

router.get('/attendanceTypes', async (req, res, next) => {
    try {
        const roleTypes = await allAttendTypes();
        res.status(200).json({ roleTypes });
    } catch (error) {
        next(error);
    }
})

router.put('/attendanceType/:id', async (req, res, next) => {
    try {
        const updatedRole = await updateAttendType(req.params.id, req.body);
        res.status(200).json({ updatedRole });
    } catch (error) {
        next(error);
    }
});

router.delete('/attendanceType/:id', async (req, res, next) => {
    try {
        const deletedRole = await deleteAttendType(req.params.id, req.body);
        res.status(200).json({ deletedRole });
    } catch (error) {
        next(error)
    }
})

module.exports = router; 