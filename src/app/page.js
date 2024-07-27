import React from "react";
import datos from "./jsn2.json";
import Tarjeta from "./Tarjeta.jsx";


const jsonIterando = () => {
  console.log(datos);

  if (!Array.isArray(datos)) {
    return <div>Error: datos no es un array</div>;
  }

  return (
    <>
    <div>
      {datos.map((dato) => (
        <Tarjeta
          key={dato.titulo}
          titulo={dato.titulo}
          descripcion={dato.descripcion}
          caracteristicas={dato.caracteristicas}
          imagen_de_referencia={dato.imagen_de_referencia}
        />))}
    </div>
    </>
  );
}

export default jsonIterando;








//para json 1
//<p><b>Características:</b> {datos.caracteristicas}</p>
//para json 3
//<p><b>Características:</b><br></br> Fecha: {dato.caracteristicas.fecha}</p>