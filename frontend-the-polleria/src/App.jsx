import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/App.css";

export const App = () => {
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
      <h1 className="text-fuchsia-900 border-4 border-indigo-500/100">
        Bienvenidossss
      </h1>
      <h1 className="text-fuchsia-900 border-4 border-indigo-500/100">
        Bienvenidossss
      </h1>
      <div className="caja">
        {data.map((item) => (
          <div className="one-caja" key={item.id}>
            <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </>
  );
};
