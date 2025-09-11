const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/Usercontroller')

router.get('/', UserControllers.getAll)
router.get('/:id', UserControllers.getById)
router.post('/', UserControllers.create)
router.put('/:id',UserControllers.update)
router.delete('/:id',UserControllers.deletar)


module.exports = router