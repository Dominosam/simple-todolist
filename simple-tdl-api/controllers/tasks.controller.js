const { StatusCodes } = require('http-status-codes');
const { TasksService }  = require('../services');

class TasksController {
    constructor() {
        this.getAllTasks = this.getAllTasks.bind(this);
    }

    async getAllTasks(_req, res, next) {
        try {
            const tasks = await TasksService.getAllTasks();
            return res.status(StatusCodes.OK).json(tasks);
        } catch(err) {
            return next(err);
        }
    }
}

module.exports = new TasksController();