import { Request, Response } from "express";
import axios from "axios";
import { notFoundError } from "../utils/errorUtils.js";
import { key } from "../config/URLconfig.js";

export async function getMovieInfoByName(req: Request, res: Response) {
  const movie = req.body.movie;
  const URL = `https://www.omdbapi.com/?t=${movie}&plot=full&apikey=${key}`;
  let movieInfos = await axios.get(URL).then((response) => response.data);
  if (!movieInfos) throw notFoundError;
  res.send(movieInfos).status(200);
}
