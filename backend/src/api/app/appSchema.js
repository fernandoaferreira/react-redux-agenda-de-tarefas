const restful = require('node-restful');
const mongo = restful.mongoose;

const appSchema = new mongo.Schema({
    description: String,
    done: {
        type: Boolean,
        default: false
    },
    create: {
        type: Date,
        default: Date.now
    }
});

module.exports = restful.model('tarefas', appSchema);

