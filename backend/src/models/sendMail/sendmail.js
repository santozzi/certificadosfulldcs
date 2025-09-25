
import { response } from 'express';
import { createTransport } from 'nodemailer';

import { emailConfig, emailFrom } from "../../config/email.config.js";


const transporter = createTransport({
  ...emailConfig,
  tls: {

    rejectUnauthorized: false // en caso de que haya certificados autofirmados
  },
  pool:true

});
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Enviar correo

export async function sendMailModel(para, asunto, mensaje,pdfName,archivoBase64) {
  await esperar(100);
  return new Promise((resolve, reject) => {

  transporter.verify((error, success) => {
    if (error) {
     
      console.error("❌ No se pudo conectar al SMTP:");
    } else {
      console.log("✅ Transporte listo para enviar correos");
    }
  });

  const base64Data = archivoBase64.split(";base64,").pop();


  const mailOptions = {
    from: emailFrom,
    to: para,
    subject: asunto,
    text: mensaje,
    attachments: [
      {
        filename: pdfName,
        content: base64Data,
        contentType: "application/pdf",
        encoding: "base64", // Cambia esto si el tipo de archivo es diferente 
      },
    ],
  };


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
 
    reject(error);
  }else{
    console.log('Correo enviado:', info.envelope.to);
    resolve({email:info.envelope.to});
  }
 
    
});
})



   

}
