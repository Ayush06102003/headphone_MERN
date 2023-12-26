
const express = require('express');

const DataRoute = require('./Routes/DataRoute');
const AuthRoute = require('./Routes/Register');
const ConnectToMongo = require('./dbConnection');

const app = express();
const PORT = 8000;

//database
ConnectToMongo();


app.use(express.json());


app.use(DataRoute);
app.use(AuthRoute);




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
