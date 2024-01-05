import { poolConection } from "../conectionDB";

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombres VARCHAR(50),
    apellidos VARCHAR(200),
    correo VARCHAR(50)
  );
`;

export const createTable = async () => {
  try {
    const connection = await poolConection.getConnection();

    await connection.query(createTableQuery);

    connection.release();

    console.log("Tabla de usuarios creada exitosamente o ya existe.");
  } catch (error) {
    console.error("Error al crear o verificar la tabla de usuarios:", error);
  }
};

createTable();
