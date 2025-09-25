import express from 'express';
import { config } from 'dotenv';
import rutaUsuarios from './routes/usuario.route.js';
import rutaSendmail from './routes/sendmail.route.js';
import home from './routes/home.routes.js';
import morgan from 'morgan';
import cors from 'cors';

import pkg from 'body-parser';
import rutaParticipantes from './routes/participantes.route.js';

const { json } = pkg;
config()

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3001
    this.middleware()
    //this.cors()
    //this.engine(template)
    this.rutas()

 
    
  }

  cors () {
    this.app.use(cors())
  } 

  engine (template) {
     try{
       require.resolve(template);
        
       this.app.set('view engine', template)
       this.app.set('views', './src/views/'+template)
     }catch (error) {
        console.log('Error al configurar el motor de plantillas:',template)
        
      }

  }
  middleware () {
    // this.app.use('/', express.static('public'))
    this.app.use(cors());
    this.app.use(json({ limit: '10mb' }));
    this.app.use(json())
    this.app.use(morgan('dev'))
    
  }

  rutas () {
    this.app.use('/api/v1/users', rutaUsuarios)
    this.app.use('/api/v1/mail', rutaSendmail)
    this.app.use('/',home)
    this.app.use('/participantes/',rutaParticipantes)
 
    // aca van las otras rutas

  }


  listen () {
    this.app.listen(this.port, () => {
      console.log(
        `Server running on port ${this.port}, host: ${process.env.HOST}:${this.port}`
      )
    })
  }
}

export default Server