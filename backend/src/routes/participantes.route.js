import {Router} from 'express';
import participantesController from '../controllers/API/participante.controller.js'; 

const rutaParticipantes = Router();

rutaParticipantes.get('/', participantesController.participantes);
rutaParticipantes.get('/:dni',participantesController.presente);

export default rutaParticipantes;
