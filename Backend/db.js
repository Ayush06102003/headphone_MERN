const mongoose = require('mongoose');

const MongoUri = 'mongodb://127.0.0.1:27017/brocode'

const ConnectToMongo = ()=>{
    try {
        mongoose.connect(MongoUri);
        console.log("Connected to Database Sucessfully");
    } catch (error) {
        console.log("Error")
    }
};

module.exports = ConnectToMongo