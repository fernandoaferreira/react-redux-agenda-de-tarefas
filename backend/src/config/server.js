const express = require('express');
const server = express();

const bodyParser = require('body-parser');
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

const port = 3005;

server.listen(port, ()=>{
    console.log('Servidor Backend - React ONLINE ...')
});

module.exports = server;