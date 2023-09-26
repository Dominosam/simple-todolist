const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const config = {
        environment: process.env.NODE_ENV || 'development',
        port: process.env.PORT || 3000,
    
        mongoDb: {
            connectionString: process.env.DB_CONNECTIONSTRING || 'mongodb+srv://admin:VZybAaIOIpdKkcCN@trainingcluster.myu3led.mongodb.net/?retryWrites=true&w=majority',
            options: {
                useNewUrlParser: process.env.DB_USENEWURLPARSER === 'true',
                useUnifiedTopology: process.env.DB_USEUNIFIEDTOPOLOGY === 'true',
                minPoolSize: Number(process.env.DB_MINIMUMPOOLSIZE || 5),
                maxPoolSize: Number(process.env.DB_MAXIMUMPOOLSIZE || 30),
                serverSelectionTimeoutMS: process.env.DB_SERVERSELECTIONTIMEOUTMILLISECONDS, // Keep trying to send operations for 5 seconds
                socketTimeoutMS: process.env.DB_SOCKETTIMEOUTMILLISECONDS, // Close sockets after 45 seconds of inactivity
            }
        }
    };

module.exports = config;
