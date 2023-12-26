const express = require('express');
const bodyParser = require('body-parser');
const ConnectToMongo = require('./db');
ConnectToMongo();
const app = express();
const port = 3000;

app.listen(port ,(req,res)=>{
    console.log(`App listening on ${port}`)
});