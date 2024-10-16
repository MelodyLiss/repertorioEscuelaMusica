const Canciones = require('../models/canciones.js');

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

const findByAttributes = async (filters) => {
    try {
        
        const conditions = {};

        if (filters.id) {
            conditions.id = filters.id;
        }
        if (filters.titulo) {
            conditions.titulo = filters.titulo;
        }
        if (filters.artista) {
            conditions.artista = filters.artista;
        }
        if (filters.tono) {
            conditions.tono = filters.tono;
        }

        const canciones = await Canciones.findAll({
            where: conditions
        });

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