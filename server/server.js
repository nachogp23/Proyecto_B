//Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//Importamos la conexion a la db
const { connect } = require("./api/utils/connect");

// Express APIs
const user = require('./api/routes/user.routes');

//Ejecutamos la funcion que conecta con la db
connect();

// Express settings
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: false
}));

server.use(cors());

// Serve static resources
server.use('/public', express.static('public'));

server.use('/api', user)

// Define PORT
const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Express error handling
server.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

server.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

server.use("*", (_req, _res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    return next(error);
});