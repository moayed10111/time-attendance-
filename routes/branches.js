const express = require('express');

const router = express.Router();

const { addBranch, getBranch, allBranches, updateBranch, deleteBranch } = require('../controller/branches');

router.post('/branch', async (req, res, next) => {
    try {
        const { body } = req;
        const newBranch = await addBranch(body);
        res.status(200).json({ newBranch });
    } catch (error) {
        next(error)
    }
});

router.get('/branch/:id', async (req, res, next) => {
    try {
        const branch = await getBranch(req.params.id);
        res.status(200).json({ branch });
    } catch (error) {
        next(error)
    }
});

router.get('/branches', async (req, res, next) => {
    try {
        const branches = await allBranches();
        res.status(200).json({ branches });
    } catch (error) {
        next(error)
    }
});

router.put('/branch/:id', async (req, res, next) => {
    try {
        const updatedBranch = await updateBranch(req.params.id, req.body);
        res.status(200).json({ updatedBranch });
    } catch (error) {
        next(error)
    }
});


router.delete('/branch/:id', async (req, res, next) => {
    try {
        const deletedBranch = await deleteBranch(req.params.id, req.body);
        res.status(200).json({deletedBranch})
    } catch (error) {
        next(error)
    }
})



module.exports = router;    