const express = require('express');

const router = express.Router();

const { addShift, getShift, allShifts, deleteShift, updateShift } = require('../controller/shifts');

router.post('/shift', async (req, res, next) => {
    try {
        const { body } = req;
        const createdShift = await addShift(body);
        res.status(200).json({ createdShift });

    } catch (error) {
        next(error)
    }
}

);

router.get('/shift/:id', async (req, res, next) => {
    try {
        const shift = await getShift(req.params.id);
        res.status(200).json({ shift });
    } catch (error) {
        next(error)
    }
});

router.get('/shifts', async (req, res, next) => {
    try {
        const shifts = await allShifts();
        res.status(200).json({ shifts });
    } catch (error) {
        next(error)
    }
});

router.put('/shift/:id', async (req, res, next) => {
    try {
        const updatedshift = await updateShift(req.params.id, req.body);
        res.status(200).json({ updatedshift })
    } catch (err) {
        next(err)
    }
});

router.delete('/shift/:id', async (req, res, next) => {
    try {
        const deletedShift = await deleteShift(req.params.id, req.body);
        res.status(200).json({ deletedShift })
    } catch (error) {
        next(err)
    }
});


module.exports = router; 