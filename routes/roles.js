const express = require('express');

const router = express.Router();

const { newRole, allRoles, updateRole, deleteRole, getRole } = require('../controller/roles');


router.post('/role', async (req, res, next) => {
    try {
        const { body } = req;
        const createdRole = await newRole(body);
        res.status(200).json({ createdRole });

    } catch (error) {
        next(error)
    }
}

);

router.get('/roles', async (req, res, next) => {
    try {

        const roles = await allRoles();
        res.status(200).json({ roles })

    } catch (error) {
        next(error)
    }
});

router.put('/role/:id', async (req, res, next) => {
    try {
        const roles = await updateRole(req.params.id, req.body);
        res.status(200).json({ roles })
    } catch (err) {
        next(err)
    }
});

router.delete('/role/:id', async (req, res, next) => {
    try {
        const deletedRole = await deleteRole(req.params.id, req.body);
        res.status(200).json({ deletedRole })
    } catch (error) {
        next(err)
    }
});

router.get('/role/:id', async (req, res, next) => {
    try {

        const roles = await getRole(req.params.id);
        res.status(200).json({ roles })

    } catch (error) {
        next(err)
 }
 });


module.exports = router; 