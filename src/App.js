import React from 'react';
import Jugador from './Jugador.js';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div className="container">
      <h1>Biografías de jugadores de fútbol</h1>
      <div className="col-md-12 ">
        <Jugador
          nombre="Lionel Messi"
          biografia="Lionel Messi es un futbolista argentino considerado uno de los mejores jugadores de todos los tiempos. Nació el 24 de junio de 1987 en Rosario, Argentina."
          fotoURL="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
        />
        <Jugador
          nombre="Cristiano Ronaldo"
          biografia="Cristiano Ronaldo es un futbolista portugués conocido por su habilidad goleadora. Nació el 5 de febrero de 1985 en Funchal, Madeira, Portugal."
          fotoURL="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
        />
        <Jugador
          nombre="Neymar Jr."
          biografia="Neymar Jr. es un futbolista brasileño que juega como delantero. Nació el 5 de febrero de 1992 en Mogi das Cruzes, Brasil."
          fotoURL="https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg"
        />
      </div>
    </div>
  );
};

export default App;
