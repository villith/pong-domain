import { Player } from "../models";

type ActionResult = 'success' | 'error';

export interface IActionResponse<DataType = undefined> {
  result: ActionResult;
  details: string;
  data?: DataType;
  error?: string;
}

export interface IEloChange {
  initiator: Player & IEloChangeBody;
  target: Player & IEloChangeBody;
}

export interface IEloChangeBody {
  originalElo: number;
  difference: number;
}