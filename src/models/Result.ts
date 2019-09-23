import { Ref, Typegoose, prop } from '@hasezoey/typegoose';

import { Match } from './Match';

class Result extends Typegoose {
  @prop({ ref: Match })
  match: Ref<Match>;

  @prop()
  initiatorScore: Number;

  @prop()
  targetScore: Number;
};

const ResultModel = new Result().getModelForClass(
  Result,
  { schemaOptions: { timestamps: true }},
);

export {
  Result,
  ResultModel,
};
