import { Ref, Typegoose, prop } from '@hasezoey/typegoose';

import { Player } from './Player';

type MatchStatus = 'pending' | 'rejected' | 'in-progress' | 'cancelled' | 'completed';

const MATCH_STATUS_LABELS: Record<MatchStatus, string> = {
  pending: 'Pending',
  rejected: 'Rejected',
  'in-progress': 'In Progress',
  completed: 'Completed',
  cancelled: 'Cancelled'
};

class Match extends Typegoose {
  @prop({ ref: Player })
  initiator: Ref<Player>;

  @prop({ ref: Player })
  target: Ref<Player>;

  @prop({ default: 'pending' })
  status: MatchStatus;

  @prop()
  acceptedAt: Date;

  @prop()
  rejectedAt: Date;

  @prop()
  completedAt: Date;

  @prop()
  cancelledAt: Date;
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
