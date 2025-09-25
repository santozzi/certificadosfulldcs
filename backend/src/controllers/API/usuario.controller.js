import usuarioModel from './../../models/sqlite/usuario.model.js';
class UsuarioController {
   async usuarios  (req,res){
        const usuarios = await usuarioModel.list();
        res.status(200).json(usuarios);

    }
    usuarioById(req,res){
        res.json({message:"hola desde usuariobyid"});
    }
   async create(req,res){
        const {nombre,apellido,email,password} = req.body;
        const usuario =await usuarioModel.create(nombre,apellido,email,password);
        if(!usuario){
            res.status(400).json({message:"Error al crear el usuario"});
        }else{
            res.status(201).json(usuario);
        }
    }


    async login(req,res){
        //recolecto credenciales
        try{
            const {email,password} = req.body;
       
             const token = await usuarioModel.validate(email,password)
 
             console.log(token);
        
      
             res.status(200).json(token);
       


        }catch(error){
             res.status(401).json({message:"Error de password o usuario",error:error.message});
        }
        
       
    }

        
    }

export default new UsuarioController();


