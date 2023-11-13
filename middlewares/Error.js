module.exports = (err, req, res, next) => {
  res
    .status(res.statusCode ?? 500)
    .send({
      statusCode: res.statusCode,
      message: err.message
    })
}
