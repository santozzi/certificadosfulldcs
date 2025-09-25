import pkg from 'sequelize';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const { Sequelize } = pkg;

// Esto es útil para resolver rutas relativas en ESM:
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: join(__dirname, 'db', 'clinica.sqlite'),
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.sync();
    console.log('Base de datos conectada.');
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
  }
};