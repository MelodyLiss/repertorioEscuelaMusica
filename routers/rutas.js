
const {Router} = require('express');
const router = Router();
const {findAllController, findByAttributesController} = require('../controllers/canciones.js')

router.get('/', findAllController);
router.get('/buscar', findByAttributesController )


// ruta defaul para paginas no encontradas
router.get('*', (req, res) => {
    res.render('index');});


module.exports = router;
