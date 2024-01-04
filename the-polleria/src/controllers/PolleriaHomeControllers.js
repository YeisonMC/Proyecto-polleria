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
