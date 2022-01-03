const cors = require('cors')
const express = require('express')
const error = require('./api/error')
const notfound = require('./api/notfound')

const todo = require('./api/todo')

const app = express()

module.exports = ({ port }) => {
    app.use(cors({
        origin: "*"
    }))

    app.use(express.json())

    app.get("/", (req, res) => res.send("hello bakunya"))

    app.use(todo)
    app.use(notfound)
    app.use(error)

    app.listen(port, () => console.log(`server running at port ${port}`))
}