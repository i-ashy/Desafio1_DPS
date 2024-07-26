import React from "react";
import estilos from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import datos from "./jsn2.json";

const jsonIterando = () => {
  console.log(datos);

  if (!Array.isArray(datos)) {
    return <div>Error: datos no es un array</div>;
  }

  return (
    //container
    <>
    <div className={`container w-75 mb-4`}>
      <h1 className={`mt-3 pt-3 mb-3 text-center ${estilos.titulo_prim}`}>Fraudes Cripto</h1>
      {datos.map((dato) => (
        <div className="card mb-3" key={dato.id}>
          <div className="card-header">
            <h2 className="card-title">{dato.titulo}</h2>
          </div>
          <div className="row card-body">
            <div className="col-md-2 d-flex flex-column justify-content-center">
              <img className="img-fluid img-thumbnail" src={dato.imagen_de_referencia}></img><br></br>
            </div>
            <div className="col-md">
              <p><b>Descripción:</b> {dato.descripcion}</p>
              <p><b>Características:</b></p>
              <ul>
                {dato.caracteristicas.map((caracteristica) => (
                  <li key={caracteristica.id}>{caracteristica}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default jsonIterando;








//para json 1
//<p><b>Características:</b> {datos.caracteristicas}</p>
//para json 3
//<p><b>Características:</b><br></br> Fecha: {dato.caracteristicas.fecha}</p>