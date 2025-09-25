import {Router} from 'express';
import suarioController from '../controllers/API/usuario.controller.js'; 
import { verifyTokenMiddleware } from '../middlewares/verifyToken.middleware.js';
const rutaUsuarios = Router();

rutaUsuarios.get('/',verifyTokenMiddleware, suarioController.usuarios);
rutaUsuarios.get('/:id', verifyTokenMiddleware,suarioController.usuarioById);
rutaUsuarios.post('/login', suarioController.login);
rutaUsuarios.post('/', verifyTokenMiddleware,suarioController.create);

export default rutaUsuarios;
