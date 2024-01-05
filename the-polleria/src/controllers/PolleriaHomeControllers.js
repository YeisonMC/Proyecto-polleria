import { poolConection } from "../conectionDB.js";

export const polleriaHome = async (req, res) => {
  try {
    const [results] = await poolConection.query("SELECT * FROM menu");
    res.json(results);
  } catch (error) {
    console.error("Error al obtener datos:", error);
    res
      .status(500)
      .json({ error: "Error al obtener datos de la base de datos" });
  }
};

export const polleriaHomePost = async (req, res) => {
  try {
    const { nombre, descripcion, precio, categoria } = req.body;

    const [results] = await poolConection.query(
      "INSERT INTO menu (nombre, descripcion, precio, categoria) VALUES (?, ?, ?, ?)",
      [nombre, descripcion, precio, categoria]
    );

    if (results.affectedRows > 0) {
      res.json({
        success: true,
        message: "Inserción exitosa",
        insertedId: results.insertId,
      });
    } else {
      res.json({ success: false, message: "No se pudo insertar el registro" });
    }
  } catch (error) {
    console.error("Error al insertar datos:", error);
    res
      .status(500)
      .json({ error: "Error al insertar datos en la base de datos" });
  }
};
