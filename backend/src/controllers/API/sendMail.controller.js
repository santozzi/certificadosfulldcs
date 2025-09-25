// refactorizar a servicios
import { sendMailModel } from '../../models/sendMail/sendmail.js';

// controladores
export const sendEmail =  async(req, res) => {
    // codigo de exito y codigo de error
 
    
/*     const pdfName = req.file.originalname;
    const pdf = req.file.buffer;
      console.log("pdfBase64:",pdf); */


    //const cuerpojson = JSON.parse(req.body);
   
    
    const {para,asunto,mensaje,originalname,archivoBase64} = req.body;
  
  
    

   
    try{
      
       const enviado = await sendMailModel( para,asunto,mensaje,originalname,archivoBase64);
      res.json({mensaje:"Correo enviado a:",enviado});
    }catch(error){
      res.json({mensaje: error.message});
    }
    
}





