import { Ref, Typegoose, getModelForClass, modelOptions, prop } from '@hasezoey/typegoose';

import { Match } from './Match';

@modelOptions({ schemaOptions: { timestamps: true }})
class Result extends Typegoose {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  
  @prop({ ref: Match, index: true, unique: true })
  match: Ref<Match>;

  @prop({ max: 21, min: 0 })
  initiatorScore: Number;

  @prop({ max: 21, min: 0 })
  targetScore: Number;
};

const ResultModel = getModelForClass(Result);

export {
  Result,
  ResultModel,
};
