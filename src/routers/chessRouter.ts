import { Router } from "express";
// import {validateSchema} from "../middlewares/validateSchema.js"
// import { loginSchema, signUpSchema } from "../schemas/schemas.js";
import { test } from "../controllers/chessController.js"


const chessRouter = Router();
chessRouter.get("/test", test);

export default chessRouter;
