const Router = require('express')
const router = new Router()
const languageController = require('../controllers/languageController')

router.post('/', languageController.create)
router.get('/', languageController.getAll)
router.put('/:id', languageController.updateRating)
router.get('/:id', languageController.getOne)

module.exports = router