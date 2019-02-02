const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //find out what it does
const morgan = require('morgan'); //logs which device etc hit the request
const config = require('./configeration/config');
const app = express();

require("./services/MQTT");

//app.use(morgan('combined'));
app.use(bodyParser.json({limit: '50mb'}));//this fixed the bug with the email size
app.use(cors()); //DO RESEACH ON THIS.... 29:42 on first video
require('./passport');

const db = require('./db');
module.exports = app;
require('./routes')(app);



//------------NEW FOR DEPLOYMENT-------------
var serveStatic = require('serve-static');
const path = require("path")

app.use(serveStatic(path.join(__dirname, "../client", "dist")));

/* app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"", "../client", "dist", "index.html"));
}); */
//--------------------------------------------


//Start Express Server 
app.listen(config.port, () =>{
    console.log('Server started on port: '+ config.port)
});  



