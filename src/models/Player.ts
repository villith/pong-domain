import { Typegoose, getModelForClass, modelOptions, prop } from '@hasezoey/typegoose';

@modelOptions({ schemaOptions: { timestamps: true }})
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

  public get playerName() {
    return 'abcd';
  }
}

//`${this.emojiFlair ? this.emojiFlair + ' ' : ''}${this.nickname || this.name} abc`;
const PlayerModel = getModelForClass(Player);

export { Player, PlayerModel };
