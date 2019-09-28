import { Typegoose, prop } from '@hasezoey/typegoose';

class Player extends Typegoose {
  @prop({ unique: true, required: true })
  slackId: string;

  @prop({ required: true, lowercase: true })
  name: string;
  
  @prop({ lowercase: true })
  nickname?: string;

  @prop()
  emojiFlair?: string;

  @prop()
  tagline?: string;

  @prop()
  victoryLine?: string;

  @prop()
  defeatLine?: string;

  @prop({ default: 1500 })
  elo: number; 
}

const PlayerModel = new Player().getModelForClass(
  Player,
  { schemaOptions: { timestamps: true }},
);

export { Player, PlayerModel };
