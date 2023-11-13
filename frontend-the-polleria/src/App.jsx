import React, { useEffect, useState } from "react";
import axios from "axios";

const getMenu = async () => {
  const response = await axios.get("/the-polleria/home");

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Ocurrió un error al obtener el menú");
  }
};

export const App = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu().then((menu) => setMenu(menu));
  }, []);

  return (
    <>
      <h1>Bienvenido</h1>
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.id}>{menuItem.name}</li>
        ))}
      </ul>
    </>
  );
};
