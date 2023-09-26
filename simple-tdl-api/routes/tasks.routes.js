const express = require('express');
const router = express.Router();

const { TasksController } = require('../controllers');

router.get('/tasks', TasksController.getAllTasks);

module.exports = router;
