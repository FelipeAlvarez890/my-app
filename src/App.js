import { useState } from 'react';
import './App.css';

function App() {

  const [usuario, setUsuario] = useState ("");


  const alumnos = [
    { id: 1, nombre: "Ana", nota: 8 },
    { id: 2, nombre: "Bruno", nota: 5 },
    { id: 3, nombre: "Carla", nota: 9 },
    { id: 4, nombre: "Diego", nota: 6 },
    { id: 5, nombre: "Elena", nota: 4 },
  ];

  const nombresA = alumnos.map((alumno) => alumno.nombre);
  const aprobados = alumnos.filter((alumno) => alumno.nota >= 6);
  const alumnoTres = alumnos.find((alumno) => alumno.id === 3);
  const nombresAlumnos = alumnos.map((alumno) => alumno.nombre);
  const desaprobados = alumnos.filter((alumno) => alumno.nota < 6);
  const notaMayorOcho = alumnos.find((alumno) => alumno.nota > 8);
  const nombresAprobados = alumnos.filter((alumno) => alumno.nota >= 6).map((alumno) => alumno.nombre);
  const nombreNota = alumnos.map((alumno) => alumno.nombre + "-" + "Nota: " + alumno.nota);

  return (
    <div className="App">
      {nombresA}
      <br></br>

      <br></br>

      <br></br>
      
      <br></br>
   
      <br></br>
  
      <br></br>

      <br></br>
      

    </div>
  );
}

export default App;
