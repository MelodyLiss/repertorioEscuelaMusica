
const { DataTypes} = require('sequelize');
const sequelize = require('../database/connection.js')

const Cancion = sequelize.define('canciones',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    titulo:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    artista:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    tono:{
        type:DataTypes.STRING(10),
        allowNull:false
    }
},{
    tableName:'canciones',
    timestamps:false
});

module.exports = Cancion;


// <> Para sincronizar con mi BBDD

// const test = () =>{
//     sequelize.sync({ force: true })
// .then(() => {
//     console.log("Las tablas existentes se han sincronizado.");
// })
// .catch(err => {
//     console.error("Error al sincronizar la tabla:", err);
// });
// }

// test()