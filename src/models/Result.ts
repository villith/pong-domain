import { Ref, Typegoose, prop } from '@hasezoey/typegoose';

import { Match } from './Match';

class Result extends Typegoose {
  @prop({ ref: Match })
  match: Ref<Match>;
  initiatorScore: Number;
  targetScore: Number;
};

const ResultModel = new Result().getModelForClass(Result);

export {
  Result,
  ResultModel,
};
