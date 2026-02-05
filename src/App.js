import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {

  /*const alumnos = [
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
  const nombreNota = alumnos.map((alumno) => alumno.nombre + "-" + "Nota: " + alumno.nota);*/


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 useEffect(() => {
  if (password === "") {
    console.log("sin contraseña");
  }
  else{
    console.log("con contraseña")
  }
 })

/*function manejarLogin() {
 if (password === "") {
 console.log("sin contrasenia");
 }
}*/

  return (
    <div className="App">
      <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <input
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}>
        </input>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <input
        type='password'
        placeholder='Contraseña'
        value={password}
        onChange={(e) => setPassword(e.target.value)}>
        </input>
      </Form.Group>

      <Button variant="primary" /*onClick={manejarLogin}*/>
        Login
      </Button>
    </Form>
      </div>
    </div>
  );
}

export default App;
