module.exports = (er, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    return res.status(statusCode).json({
        message: er
    })
}