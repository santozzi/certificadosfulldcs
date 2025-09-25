import Participante from './entities/participante.entity.js';


class ParticipanteModel {
  //muestra a todos los participantes
  list(){
    return Participante.findAll();
  }


create(nombre,apellido,email,dni){
   //email unico


  return Participante.create({
    nombre,
    apellido,
    email,
    dni,
    presente:false
  });
}
findByID(dni){ 
  const participante = Participante.findOne({dni});
  if(!participante){
    throw new Error("el dni no existe")
  }
  return participante;
}
async presente(dni){
    const participante =await Participante.findOne({where: { dni }});
  console.log(participante);
  
    if(!participante){
    throw new Error("el dni no existe")
  }
  participante.presente = true;
  await participante.save();
  return participante;
}
}
export default new ParticipanteModel();


