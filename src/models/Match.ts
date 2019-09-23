import { Ref, Typegoose, prop } from '@hasezoey/typegoose';

import { Player } from './Player';

type MatchStatus = 'pending' | 'rejected' | 'in-progress' | 'completed';

const MATCH_STATUS_LABELS: Record<MatchStatus, string> = {
  pending: 'Pending',
  rejected: 'Rejected',
  'in-progress': 'In Progress',
  completed: 'Completed',
};

class Match extends Typegoose {
  @prop({ ref: Player })
  initiator: Ref<Player>;

  @prop()
  target: Ref<Player>;

  @prop()
  status: MatchStatus;

  @prop()
  acceptedAt: Date;

  @prop()
  rejectedAt: Date;

  @prop()
  completedAt: Date;
}

const MatchModel = new Match().getModelForClass(
  Match,
  { schemaOptions: { timestamps: true }},
);

export {
  Match,
  MatchModel,
  MatchStatus,
  MATCH_STATUS_LABELS,
};
