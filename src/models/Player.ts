import { Typegoose, prop } from 'typegoose';

class Player extends Typegoose {
  @prop()
  name?: string;
  nickname?: string;
  emojiFlair?: string;
  tagline?: string;
  victoryLine?: string;
  defeatLine?: string;
  elo?: number; 
}

const PlayerModel = new Player().getModelForClass(Player);

export { Player, PlayerModel };
