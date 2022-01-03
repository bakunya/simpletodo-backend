const { todos } = require('../../repository/models/todos')

module.exports = async (req, res, next) => {
    const { id } = req.params
    try {
        const dataTodos = await todos.findOne({ _id: id }).select('todo')
        res.status(200).json(dataTodos)
    } catch(er) {
        next(er.message)
    }
}