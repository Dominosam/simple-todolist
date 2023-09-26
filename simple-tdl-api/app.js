const express = require('express');
const cors = require('cors');

const config = require('./config/index.js');
require('./db/index.js');

const app = express();

app.use(express.json());
app.use(cors());

// Routes
const routes = require('./routes/index.js');
app.use('/', routes);

// Error handler
app.use(function(err, req, res, next) {
    console.error(err.stack);
    return res.status(err.status || 500).json({
        message: err.message,
        error: config.env === 'development' ? err.stack : {}
    });
});

app.listen(config.port, function() {
    console.log('Server listening on port ' + config.port);
});