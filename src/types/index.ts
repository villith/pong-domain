type ActionResult = 'success' | 'error';

export interface IActionResponse {
  result: ActionResult;
  details: string;
  error?: string;
}