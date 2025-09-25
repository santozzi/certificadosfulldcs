import Usuario from './entities/Usuario.entity.js';
import jwt from 'jsonwebtoken';

class UsuarioModel {
  list(){
    return Usuario.findAll();
  }

  async validate (email, password) {
  try {

    const userEmailFound = await Usuario.findOne({
      where: {
        email,
        password
      },
    });
    

     
    
    if (!userEmailFound ) {
      throw new Error("wrong email or password");
    }

      //payload, secreto, tiempo de expiracion
      const payload = {
        userId: userEmailFound._id,
        userEmail: userEmailFound.email,
      };
    const token = jwt.sign(
        payload, "palabraSecreta", 
        {
          expiresIn: "24h",
        }
      ); 
    return token;
  } catch (error) {
    throw error;
  }
};
create(nombre,apellido,email,password){
   //email unico

  const usuario = Usuario.build({
    nombre,
    apellido,
    email,
    password
  }
 
);
  return usuario.save();
}
}
export default new UsuarioModel();


