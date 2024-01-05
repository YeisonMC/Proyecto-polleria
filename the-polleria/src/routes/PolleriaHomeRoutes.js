import { Router } from "express";
import {
  polleriaHome,
  polleriaHomePost,
} from "../controllers/PolleriaHomeControllers.js";

const router = Router();

router.get("/the-polleria/home", polleriaHome);

// Ruta para insertar datos (método POST)
router.post("/polleriaHome/api", polleriaHomePost);

export default router;
