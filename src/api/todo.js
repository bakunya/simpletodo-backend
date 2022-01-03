const get = require('../controller/todo/get')
const getOne = require('../controller/todo/getOne')
const create = require('../controller/todo/create')
const update = require('../controller/todo/update')
const _delete = require('../controller/todo/delete')

const router = require('express').Router()

router.get("/todo", get)
router.get("/todo/:id", getOne)
router.post("/todo", create)
router.put("/todo", update)
router.delete("/todo/:id", _delete)

module.exports = router