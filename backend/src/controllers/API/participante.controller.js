import participanteModel from '../../models/sqlite/participante.model.js';
import limpiarDni from '../../utils/limpiarDni.js';
class ParticipanteController {
   async participantes  (req,res){
        const participantes = await participanteModel.list();
        res.status(200).json(participantes);

    }

   async create(req,res){
        const {nombre,apellido,email,dni} = req.body;
        const dniLimpio = limpiarDni(dni);
        const participante =await participanteModel.create(nombre,apellido,email,dniLimpio);
        if(!participante){
            res.status(400).json({message:"Error al crear el participante"});
        }else{
            res.status(201).json(participante);
        }
    }

   async presente(req,res){
     const {dni} = req.params;
     try{
      const paciente =  await participanteModel.presente(dni);
       res.status(200).json(paciente); 
     }catch(error){
       res.status(404).json({message:"No está preinscripto"});
     }
     
   }
         
    }
 

export default new ParticipanteController();


