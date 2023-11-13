import express from "express";
import axios from "axios";
import polleriaRoutes from "./src/routes/PolleriaRoutes.js";
import PolleriaHomeRoutes from "./src/routes/PolleriaHomeRoutes.js";

const app = express();
app.listen(3000);
console.log("Ejuctando en el puerto: 3000");

app.use(polleriaRoutes);
app.use(PolleriaHomeRoutes);
