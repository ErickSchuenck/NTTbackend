import { Router } from "express";
import movieRouter from "./movieRouter.js";
var router = Router();
router.use(movieRouter);
export default router;
