import { Router } from "express";
import { polleriaHome } from "../controllers/PolleriaHomeControllers.js";

const router = Router();

router.get("/the-polleria/home", polleriaHome);

export default router;
