const express = require('express');
const ProjectsRouter = require('../routes/project-routes.js');
const TasksRouter = require('../routes/task-routes.js');
const ResourcesRouter = require('../routes/resource-routes.js');
const server = express();

server.use(express.json());

server.use('/api/projects', ProjectsRouter);
server.use('/api/tasks', TasksRouter);
server.use('/api/resources', ResourcesRouter);

server.use('/'), (req, res) => {
    res.send({ message: "Projects api is runnings" })
}

module.exports = server;