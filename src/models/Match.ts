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
  target: Ref<Player>;
  status: MatchStatus;
  acceptedAt: Date;
  rejectedAt: Date;
  completedAt: Date;
}

const MatchModel = new Match().getModelForClass(Match);

export {
  Match,
  MatchModel,
  MatchStatus,
  MATCH_STATUS_LABELS,
};
