const { todos } = require('../../repository/models/todos')

module.exports = async (req, res, next) => {    
    const { id } = req.params

    try {
        await todos.deleteOne({ _id: id })
        res.sendStatus(201)
    } catch(er) {
        next(er.message)
    }
}