type ActionResult = 'success' | 'error';

export interface IActionResponse<DataType = undefined> {
  result: ActionResult;
  details: string;
  data?: DataType;
  error?: string;
}