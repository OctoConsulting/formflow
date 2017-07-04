//MAIN FILE FOR SERVER INITIALIZATION

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongodb = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const app = express(); //instance of app created
const router = require('./router');//importing router into this
const cors = require('cors');
//SERVER SETUP
mongo.connect('mongodb://localhost:/dataBase');
//APP SETUP
//Any incoming requests will be passed through
//morgan and bodyParser (they are middlewares)
app.use(cors());//Making sure CORS doesn't intefere with incoming requests
app.use(morgan('combined'));//morgan logs incoming requests for debugging
app.use(bodyParser.json({type: '*/*'}));//body-parser parses incoming requests as JSON
router(app); //calling router to start routing data

//CONFIGURE EMAILER


//SERVER SETUP
const port = process.env.PORT || 3090; //use 3090 or use environment PORT
const server = http.createServer(app); //create an HTTP server and send it to app

server.listen(port);
console.log("Server listening on port: ", port);
