const tarefasSchema = require('./appSchema');

tarefasSchema.methods(['get', 'post', 'put', 'delete'])
tarefasSchema.updateOptions({ new: true, runValidators: true})

module.exports = tarefasSchema;