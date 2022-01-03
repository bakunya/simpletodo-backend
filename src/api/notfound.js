module.exports = (req, res, next) => {
    res.status(404)
    next(`path ${req.url} is not found.`)
}