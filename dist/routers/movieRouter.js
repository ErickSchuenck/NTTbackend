import { Router } from "express";
import { getMovieInfoByName } from "../controllers/movieController.js";
var movieRouter = Router();
movieRouter.post("/movie", getMovieInfoByName);
export default movieRouter;
