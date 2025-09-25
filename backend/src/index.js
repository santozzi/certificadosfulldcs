import Server from './server.js';
import { connectDB } from './models/sqlite/config/db.js';
import SocketManager from './socketManager.js';
import http from 'http';
import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';
import participanteModel from './models/sqlite/participante.model.js';
import limpiarDni from './utils/limpiarDni.js';
connectDB()
function convertirAObjetos(matriz) {
  if (!matriz || matriz.length < 2) return [];

  const headers = matriz[0]; // primera fila como claves
  const filas = matriz.slice(1); // el resto de los datos

  return filas.map(fila => {
    let obj = {};
    headers.forEach((col, i) => {
      obj[col] = fila[i] || null; // si falta valor, poner null
    });
    return obj;
  });
}

async function getGoogleSheet(sheetId) {
  const auth = new GoogleAuth({
    keyFile: "./src/credentials.json", // archivo de la service account
    scopes: ["https://www.googleapis.com/auth/spreadsheets"], // scope con edición
  });

  const client = await auth.getClient();

  const mysheet = google.sheets({
    version: 'v4',
    auth: client,
  });

  try {
    const response = await mysheet.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Form responses!A2:D10', // ajusta el rango según tu hoja
    });

    return response.data.values || []; // devuelve las filas
  } catch (error) {
    console.error("❌ Error leyendo Google Sheet:", error.message);
    return null;
  }
}

// connectDB()
const server = new Server();
const httpServer = http.createServer(server.app);

// 🔌 Inicializar socket
const socketManager = new SocketManager(httpServer);
httpServer.listen(3000, () => {
  console.log(`✅ Servidor en http://localhost:3000`);
});
function cargarDatosDeSheets(){
getGoogleSheet("")
  .then(table => {
    const datos = convertirAObjetos([["nombre","apellido","dni","email"],...table])
    datos.forEach((participante)=>{
       const  {nombre,apellido,dni,email} = participante;
       participanteModel.create(nombre,apellido,email,limpiarDni(dni));
    });
    //console.log("📊 Datos de la hoja:", datos.find(participante=>participante.dni==="44.881.127"));
    participanteModel.list().then(participantes=>console.log(participantes))
  });
}
export { socketManager }; // Exportar para usar en otros módulos
