import { Router } from "express";
import { getMovieInfoByName } from "../controllers/movieController.js";

const movieRouter = Router();
movieRouter.get("/movie", getMovieInfoByName);

export default movieRouter;
