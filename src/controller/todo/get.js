const { todos } = require('../../repository/models/todos')

module.exports = async (req, res, next) => {    
    try {
        const dataTodos = await todos.find({  }).select('todo')
        res.status(200).json(dataTodos)
    } catch(er) {
        next(er.message)
    }
}