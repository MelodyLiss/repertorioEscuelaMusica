const Canciones = require('../models/canciones.js');
const { Op } = require('sequelize');

const findAll = async () => {
    try {
        const canciones = await Canciones.findAll();
        if (canciones.length == 0) {
            return {
                msg: 'No hay canciones en el repertorio',
                status: 204,
                datos: []
            }
        } return {
            msg: 'Listado de canciones',
            status: 200,
            datos: canciones.map(cancion => cancion.dataValues)
        }

    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const findByAttributes = async (filtro) => {
    try {
        //<> Filtra las propiedades de filtro que no son undefined o null
            //Object.fromEntries --> convierte el objeto en un arreglo de arreglos par [clave, valor]
            //filter(([key, value]) => value  --> para filtrar en este caso por valor eliminando los con valor falso (null , vacios , undefined)
            //Object.entries --> Convertir el array filtrado nuevamente en un objeto

        const condicion = Object.fromEntries(
            Object.entries(filtro).filter(([key, value]) => value) 
        );

            //op para operadores y iLike es para que no discrimine entre mayúsculas y minusculas
            // % comodin para que busque cualquiera que coincida con la palabra 
        
        if (condicion.titulo) {
            condicion.titulo = { [Op.iLike]: `%${condicion.titulo}%` }; 
        }
        if (condicion.artista) {
            condicion.artista = { [Op.iLike]: `%${condicion.artista}%` };
        }
        if (condicion.tono) {
            condicion.tono = { [Op.iLike]: `%${condicion.tono}%` };         }

        const canciones = await Canciones.findAll({ where: condicion });
        if (canciones.length === 0) {
            return {
                msg: 'No se encontraron canciones con los criterios proporcionados',
                status: 204,
                datos: []
            };
        }

        
        return {
            msg: 'Canciones encontradas',
            status: 200,
            datos: canciones.map(cancion => cancion.dataValues)
        };

    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        };
    }
};

module.exports = {
    findAll,
    findByAttributes
}