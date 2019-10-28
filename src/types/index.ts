import { Player } from "../models";

export type Intervals = 'daily' | 'weekly' | 'monthly' | 'yearly';

type ActionResult = 'success' | 'error';

export interface IActionResponse<DataType = undefined> {
  result: ActionResult;
  details: string;
  data?: DataType;
  error?: string;
}

export interface IEloChange {
  winner: Player & IEloChangeBody;
  loser: Player & IEloChangeBody;
}

export interface IEloChangeBody {
  originalElo: number;
  difference: number;
}

export type Standings = Record<string, {
  wins: number;
  losses: number;
  eloChange: number;
  currentElo: number;
  playerName: string;
}>;