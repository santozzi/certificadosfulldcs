import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Participante = sequelize.define('Participante', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
    },
  dni:{
    type: DataTypes.STRING,
    unique:true 
  } ,
  presente: DataTypes.BOOLEAN

});

export default Participante;