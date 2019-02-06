const express = require('express');

module.exports = function(server) {

    const routerExpress = express.Router();
    
    server.use('/api', routerExpress);

    const appRestFullConfig = require('../api/app/appRestFullConfig');

    appRestFullConfig.register(routerExpress, '/tarefas');
    
};