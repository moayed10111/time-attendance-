const express = require('express');

const router = express.Router();

const newRole = require('../controller/roles');


router.post('/roles', async (req, res, next) => {
    try {
        const { body } = req;
        const createdRole = await newRole(body);
        res.status(200).json({ createdRole });

    } catch (error) {
        next(error)
    }
}

);

module.exports = router;