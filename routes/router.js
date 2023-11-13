const router = require('express').Router()

const productRouter = require('./Product')
const userRouter = require('./User')
const storeRouter = require('./Store-router')

router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/storeRouter', storeRouter)

module.exports = router
