const mongoose = require('mongoose');
const config = require('../config');

(async () => {
    await mongoose.connect(config.mongoDb.connectionString, config.mongoDb.options);
})();
    