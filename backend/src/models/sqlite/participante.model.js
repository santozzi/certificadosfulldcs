import Participante from "./entities/participante.entity.js";

class ParticipanteModel {
  //muestra a todos los participantes
  list() {
    return Participante.findAll();
  }

  async create(nombre, apellido, email, dni, presente = false) {
    //email unico
    try {
      const paciente = await Participante.create({
        nombre,
        apellido,
        email,
        dni,
        presente,
      });
    
      return paciente;
    } catch (error) {
      console.log("error al guardar");
    
    }
  }
  findByID(dni) {
    const participante = Participante.findOne({ dni });
    if (!participante) {
      throw new Error("el dni no existe");
    }
    return participante;
  }
  async presente(dni) {
    const participante = await Participante.findOne({ where: { dni } });

    if (!participante) {
      throw new Error("No esta preinscripto");
    }
    participante.presente = true;
    await participante.save();
    return participante;
  }
}
export default new ParticipanteModel();
