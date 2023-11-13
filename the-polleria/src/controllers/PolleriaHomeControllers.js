import { poolConection } from "../conectionDB.js";

export const polleriaHome = async (req, res) => {
  const [result] = await poolConection.query("SELECT * FROM menu");
  res.json(result[0]);
};
