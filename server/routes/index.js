const Router = require('express')
const router = new Router()
const typeRouter = require('./typeRouter')
const languageRouter = require('./languageRouter')
const userRouter = require('./userRouter')
const postRouter = require('./postRouter')

router.use('/type', typeRouter)
router.use('/language', languageRouter)
router.use('/user', userRouter)
router.use('/post', postRouter)


module.exports = router