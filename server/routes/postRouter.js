const Router = require('express')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')
const postController = require('../controllers/postController')

router.post('/', checkRole('ADMIN'), postController.create)
router.get('/', postController.getAll)
router.get('/:id', postController.getOne)
router.delete('/:id', checkRole('ADMIN'), postController.delete)

module.exports = router