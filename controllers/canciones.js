const {findAll} = require('../service/canciones.js');

const findAllController = async (req,res) => {
    const respuesta = await findAll();
    res.render('index',{
        msg: respuesta.msg,  
        status: respuesta.status,  
        canciones: respuesta.datos
    })
}



module.exports ={
    findAllController
}