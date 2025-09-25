//configuracion de las variables de entorno
import { config } from 'dotenv';
config();

export const emailConfig = {
    host: process.env.HOST_SMTP,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
}
export const emailFrom = `"DCS" <${process.env.EMAIL_ADDRESS}>`; // Remitente del correo
    
