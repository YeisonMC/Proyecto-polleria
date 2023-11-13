import { Router } from "express";
import { getPolleria } from "../controllers/PolleriaControllers.js";

const router = Router();

router.get("/the-polleria", getPolleria);
router.post("/the-polleria", (req, res) => res.send("post Home"));
router.put("/the-polleria", (req, res) => res.send("put Home"));
router.delete("/the-polleria", (req, res) => res.send("detele Home"));

export default router;
