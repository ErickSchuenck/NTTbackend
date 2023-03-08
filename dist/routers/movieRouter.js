import { Router } from "express";
import { getMovieInfoByName } from "../controllers/movieController";
var movieRouter = Router();
movieRouter.get("/movie", getMovieInfoByName);
export default movieRouter;
