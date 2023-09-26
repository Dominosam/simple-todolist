const { Tasks } = require('../models');

class TasksService {
    constructor() {
        this.getAllTasks = this.getAllTasks.bind(this);
    }

    async getAllTasks() {
        const allTasks = await Tasks.find().exec();
        return allTasks;
    }
}

module.exports = new TasksService();
