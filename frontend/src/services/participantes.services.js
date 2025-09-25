// src/services/participanteService.js
const API_URL = "http://server.cienciasdelasalud.uns.edu.ar:3000"; // base URL

export async function obtenerParticipantes() {
  const res = await fetch(`${API_URL}/participantes`);
  if (!res.ok) throw new Error("Error al obtener participantes");
  return await res.json();
}


export async function marcarPresente(dni) {
  const res = await fetch(`${API_URL}/participantes/${dni}`, {
    method: "GET"
  });
  if (!res.ok){
    const errorData =await res.json() ;
  
    
     throw new Error(errorData.message);
  }
  return await res.json();
}
