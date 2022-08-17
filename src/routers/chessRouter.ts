import { Router } from "express";
// import {validateSchema} from "../middlewares/validateSchema.js"
// import { loginSchema, signUpSchema } from "../schemas/schemas.js";
import { move, createGame } from "../controllers/chessController.js"


const chessRouter = Router();
chessRouter.post("/create", createGame);
chessRouter.post("/move", move);

export default chessRouter;
