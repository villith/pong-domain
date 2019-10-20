import { Ref, Typegoose, getModelForClass, modelOptions, prop } from '@hasezoey/typegoose';

import { Player } from './Player';

type MatchStatus = 'pending' | 'rejected' | 'accepted' | 'cancelled' | 'completed';
const MATCH_STATUS_LABELS: Record<MatchStatus, string> = {
  pending: 'Pending',
  rejected: 'Rejected',
  accepted: 'In Progress',
  completed: 'Completed',
  cancelled: 'Cancelled'
};

const MatchStatusEnum: MatchStatus[] = [
  'accepted',
  'cancelled',
  'completed',
  'pending',
  'rejected',
];

@modelOptions({ schemaOptions: { timestamps: true }})
class Match extends Typegoose {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  
  @prop({ ref: Player })
  initiator: Ref<Player>;

  @prop({ ref: Player })
  target: Ref<Player>;

  @prop({
    default: 'pending',
    enum: MatchStatusEnum,
  })
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

const MatchModel = getModelForClass(Match);

export {
  Match,
  MatchModel,
  MatchStatus,
  MATCH_STATUS_LABELS,
};
