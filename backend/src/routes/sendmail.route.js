import multer, { memoryStorage } from 'multer';
import { sendEmail } from '../controllers/API/sendMail.controller.js';

// Configurar multer para recibir archivos
const storage = memoryStorage(); // Guarda el archivo en memoria
const upload = multer({ storage: storage });
import { Router } from 'express';
import { verifyTokenMiddleware } from '../middlewares/verifyToken.middleware.js';

const rutaSendMail = Router();

//rutaSendMail.post('/',verifyTokenMiddleware, sendEmail);
rutaSendMail.post('/', sendEmail);
//Otras rutas CRUD


export default rutaSendMail;