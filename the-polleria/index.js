import express from "express";
import { poolConection } from "./conectionDB.js";

const app = express();
app.listen(3000);
console.log("Ejuctando en el puerto: 3000");

app.get("/the-polleria/prueba", async (req, res) => {
  const [result] = await poolConection.query("SELECT * FROM menu");
  res.json(result);
});

app.get("/the-polleria", (req, res) => res.send("get Home"));
app.post("/the-polleria", (req, res) => res.send("post Home"));
app.put("/the-polleria", (req, res) => res.send("put Home"));
app.delete("/the-polleria", (req, res) => res.send("detele Home"));

// app.route("/").get((req, res) => {
//   res.sendFile("index.html");
// });

// app.route
