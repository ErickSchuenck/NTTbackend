import { Request, Response } from "express";
import axios from "axios";

const URL = `https://omdbapi.com/?s=whiplash&page=1&apikey=e576b8e9`;

export async function getMovieInfoByName(req: Request, res: Response) {
  let movieInfos = await axios.get(URL).then((response) => response.data);
  console.log(movieInfos);
  res.send(movieInfos).status(200);
}
