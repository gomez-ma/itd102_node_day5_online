require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT;

const db = require("./app/models");
db.sequelize.sync({force: false}).then(() => {
    console.log('Database sync...');
});

app.get('/', function(req, res){
    res.send('Default Route');
});

app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});
