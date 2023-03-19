// I.N.D.U.C.E.S
const express = require('express')

const router = express.Router()

const logController = require('../controllers/logController')

router.get('/', logController.index)



router.get('/new', (req, res) => {
    res.render('New')
})

router.delete('/clear', logController.clear)

router.delete('/:id', logController.delete)


router.put('/:id', logController.update)


router.post('/seed', logController.seed)


router.post('/', logController.create )


router.get('/:id/edit', logController.edit)

router.get('/:id', logController.show)

module.exports = router