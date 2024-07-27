import React from "react";
import estilos from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tarjeta = ({titulo,descripcion,caracteristicas,imagen_de_referencia}) => {
    return (
        <div className={`container w-75 mb-4`}>
            <h1 className={`mt-3 pt-3 mb-3 text-center ${estilos.titulo_prim}`}>Fraudes Cripto</h1>
        <div className="card mb-3" key={titulo}>
        <div className="card-header">
            <h2 className="card-title">{titulo}</h2>
        </div>
        <div className="row card-body">
            <div className="col-md-2 d-flex flex-column justify-content-center">
              <img className="img-fluid img-thumbnail" src={imagen_de_referencia}></img><br></br>
        </div>
        <div className="col-md">
            <p><b>Descripción:</b> {descripcion}</p>
            <p><b>Características:</b></p>
            <ul>
                {caracteristicas.map((caracteristica) => (
                <li key={caracteristica.id}>{caracteristica}</li>
                ))}
            </ul>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Tarjeta;