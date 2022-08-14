import { Request, Response } from "express";
import { Chess } from 'chess.js'

const chess = new Chess()

export async function test (req: Request, res: Response) {
  
  while (!chess.game_over()) {
    const moves = chess.moves()
    const move = moves[Math.floor(Math.random() * moves.length)]
    chess.move(move)
  }

  console.log(chess.pgn())
  res.sendStatus(200)
}