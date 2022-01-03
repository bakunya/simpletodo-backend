const { todos } = require('../../repository/models/todos')

module.exports = async (req, res, next) => {
    const { todo } = req.body
    
    try {
        await todos.create({ todo })
        res.sendStatus(201)
    } catch(er) {
        next(er.message)
    }
}