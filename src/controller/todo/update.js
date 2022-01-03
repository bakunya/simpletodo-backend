const { todos } = require('../../repository/models/todos')

module.exports = async (req, res, next) => {    
    const { id, todo} = req.body

    try {
        await todos.updateOne({ _id: id }, { todo })
        res.sendStatus(201)
    } catch(er) {
        next(er.message)
    }
}