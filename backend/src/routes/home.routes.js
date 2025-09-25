import {Router}  from 'express';
import {home} from  '../controllers/home/home.controller.js';
import {socketManager} from './../index.js';
const rutaHome = Router();
rutaHome.get('/', (req,res)=>{
  socketManager.emitir("mensaje_servidor",{text:"hola"});
  res.send("hola")
});
//Otras rutas CRUD

export default rutaHome;







