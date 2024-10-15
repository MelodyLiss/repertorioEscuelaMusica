
const { DataTypes} = require('sequelize');
const sequelize = require('../database/connection.js')

const Cancion = sequelize.define('Canciones',{
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
    tableName:canciones,
    timestamps:false
});

module.exports = Cancion;

