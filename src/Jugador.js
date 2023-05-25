import React from 'react';


const Jugador = ({ nombre, biografia, fotoURL }) => {
    return (
      <div className="card custom-card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img className="card-img custom-card-img img-fluid" src={fotoURL} alt={nombre} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">{biografia}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Jugador;
