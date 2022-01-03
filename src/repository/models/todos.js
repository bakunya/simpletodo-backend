const { Schema, model } = require('mongoose')

const todosSchema = new Schema({
    todo: {
        type: String,
        required: [true, 'todo tidak boleh kosong'],
        default: ''
    },
})

const todos = model('todos', todosSchema)

module.exports = {
    todos,
    schema: todosSchema,
}