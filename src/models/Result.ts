import { Ref, Typegoose, getModelForClass, modelOptions, prop } from '@hasezoey/typegoose';

import { Match } from './Match';

@modelOptions({ schemaOptions: { timestamps: true }})
class Result extends Typegoose {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  
  @prop({ ref: Match })
  match: Ref<Match>;

  @prop()
  initiatorScore: Number;

  @prop()
  targetScore: Number;
};

const ResultModel = getModelForClass(Result);

export {
  Result,
  ResultModel,
};
