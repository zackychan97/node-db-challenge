const express = require('express');
const server = express();

server.use(express.json());

server.use('/'), (req, res) => {
    res.send({ message: "Projects api is runnings" })
}

module.exports = server;