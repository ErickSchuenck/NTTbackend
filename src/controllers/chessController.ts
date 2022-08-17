import { Request, Response } from "express";
import jsChessEngine from 'js-chess-engine'

let game = new jsChessEngine.Game()

export async function createGame (req: Request, res: Response) {
  game = new jsChessEngine.Game()
  res.sendStatus(200)
}


export async function move (req: Request, res: Response) {
  const {from, to} = req.body
  game.move(from, to)
  await game.aiMove(3)
  res.status(200).send(game)
}