import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Usuario = sequelize.define('Usuario', {
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
  password: DataTypes.STRING
});

export default Usuario;