import express from "express";
import cors from "cors";
import polleriaRoutes from "./src/routes/PolleriaRoutes.js";
import PolleriaHomeRoutes from "./src/routes/PolleriaHomeRoutes.js";

const app = express();

app.listen(3000);
app.use(cors());
console.log("Ejecutando en el puerto: 3000");

app.use(polleriaRoutes);
app.use(PolleriaHomeRoutes);
