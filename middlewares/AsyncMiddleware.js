const { Types } = require('mongoose')
module.exports = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res, next)
    } catch (error) {

      if (req.params.id && !Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ statusCode: 400, message: 'Invalid Identification' })
        return
      }

      next(error)
    }
  }
}
