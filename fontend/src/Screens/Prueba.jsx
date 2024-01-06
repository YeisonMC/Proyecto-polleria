import React, { useEffect, useState } from "react";
import axios from "axios";

export const Prueba = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/the-polleria/home"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        {data.length > 0 ? (
          <div>
            {data.map((item) => (
              <div key={item.id}>
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </>
  );
};
