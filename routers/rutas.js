
const {Router} = require('express');
const router = Router();
const {findAllController} = require('../controllers/canciones.js')

router.get('/', findAllController);



// ruta defaul para paginas no encontradas
router.get('*', (req, res) => {
    res.render('index');});


module.exports = router;
