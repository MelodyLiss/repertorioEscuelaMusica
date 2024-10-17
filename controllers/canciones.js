const {findAll, findByAttributes} = require('../service/canciones.js');

const findAllController = async (req,res) => {
    const respuesta = await findAll();
    res.render('index',{
        msg: respuesta.msg,  
        status: respuesta.status,  
        canciones: respuesta.datos
    })
}

const findByAttributesController = async (req, res) => {
    const filtro = {};
    const filtroSeleccion = req.query.busqueda; // Aqui toma el boton radio seleccionado :D
    const valorBusqueda = req.query.buscar; //Imput buscar
    if (filtroSeleccion && valorBusqueda) {
        filtro[filtroSeleccion] = valorBusqueda; // Asigna el filtro al campo adecuado
    }

    const respuesta = await findByAttributes(filtro);

    res.render('index', {
        msg: respuesta.msg,
        status: respuesta.status,
        canciones: respuesta.datos
    });
};


module.exports ={
    findAllController,
    findByAttributesController
}