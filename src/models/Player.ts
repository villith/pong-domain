import { Typegoose, prop } from '@hasezoey/typegoose';

class Player extends Typegoose {
  @prop({ unique: true, required: true })
  name: string;
  
  nickname?: string;
  emojiFlair?: string;
  tagline?: string;
  victoryLine?: string;
  defeatLine?: string;

  @prop({ default: 1500 })
  elo: number; 
}

const PlayerModel = new Player().getModelForClass(Player);

export { Player, PlayerModel };
