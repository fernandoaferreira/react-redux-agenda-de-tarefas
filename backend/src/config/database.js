const mongo = require('mongoose');

mongo.Promise = global.Promise;

module.exports = mongo.connect('mongodb://localhost/react-tarefas', () => {
    console.log('Servidor Mongo ONLINE ...')
});