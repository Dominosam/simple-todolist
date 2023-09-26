const mongoose = require('mongoose');
const config = require('../config/index.js');

(async () => {
    await mongoose.connect(config.mongoDb.connectionString, config.mongoDb.options);
})();
