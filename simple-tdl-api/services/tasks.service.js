const { Tasks } = require('../models');

class TasksService {
    constructor() {
        this.getAllTasks = this.getAllTasks.bind(this);
    }

    async getAllTasks() {
        return await Tasks.find().exec();
    }
}

module.exports = new TasksService();
