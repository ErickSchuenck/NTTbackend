import { Router } from "express";
import chessRouter from "./chessRouter.js";

const router = Router();
router.use(chessRouter);

export default router;