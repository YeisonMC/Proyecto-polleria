import express from "express";
import cors from "cors";
import PolleriaHomeRoutes from "./src/routes/PolleriaHomeRoutes.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(PolleriaHomeRoutes);

app.listen(3000);
console.log("Ejecutando en el puerto: 3000");
