"use client";
import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';
import {marcarPresente} from './../../services/participantes.services';


const Presente = () => {
    
  const [dni, setDni] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleMarcarPresente = async () => {
    try {
      if (dni.trim() === '') {
        setMensaje('Por favor, ingrese un DNI.');
        return;
      }
      
      const respuesta = await marcarPresente(dni);
      setMensaje(`Presente marcado exitosamente para: ${respuesta.nombre} ${respuesta.apellido}`);
      // También puedes limpiar el campo si lo deseas
      // setDni('');
    } catch (error) {
      setMensaje(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <p>Ingrese su dni para marcar el presente y haga click en Presente!!</p>
      <TextField 
        id="outlined-basic" 
        label="DNI" 
        variant="outlined" 
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      /><br /><br />
      <Button 
        variant="contained"
        onClick={handleMarcarPresente}
      >
        Presente!!
      </Button>
      <p>{mensaje}</p>
    </div>
  );
};



export default Presente;