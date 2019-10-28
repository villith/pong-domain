import { Ref, Typegoose, getModelForClass, modelOptions, prop } from '@hasezoey/typegoose';

import { Match } from './Match';
import { Player } from './Player';

@modelOptions({ schemaOptions: { timestamps: true }})
class Result extends Typegoose {
  _id: string;
  createdAt: Date;
  updatedAt: Date;

  @prop({
    ref: Match,
  })
  match: Ref<Match>;

  @prop({
    ref: Player,
  })
  winner: Ref<Player>;

  @prop({
    ref: Player,
  })
  loser: Ref<Player>;

  @prop()
  winnerElos: {
    start: number;
    end: number;
  }

  @prop()
  loserElos: {
    start: number;
    end: number;
  }
}

const ResultModel = getModelForClass(Result);

export {
  Result,
  ResultModel,
};
