const express = require("express");
const router = require("./router");
const bodyParser = require('body-parser');

const server = express();

server.use(express.json());

server.use(bodyParser.json());

server.use(router);

module.exports =  server;

