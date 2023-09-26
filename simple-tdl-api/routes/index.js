const express = require('express');
const httpStatus = require('http-status-codes');
const tasksRouter = require('./tasks.routes.js');

const router = express.Router();

router.get('/', function(_req, res) {
    return res.status(httpStatus.OK).json
        ({ message: 'TODO Tasks Server!' });
    }
);

router.use('/tasks', tasksRouter);

module.exports = router;
