require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_CONNECTION_URL="mongodb+srv://inShare:jhj6fwXZejlmhgGK@cluster0.jxt6ett.mongodb.net/inShare?retryWrites=true&w=majority"
function connectDB() {
    mongoose.connect(MONGO_CONNECTION_URL);
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('DataBase Connected.');
    }).on('error', function (err) {
        console.log('Failed!');
    });
}

module.exports = connectDB;