"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var matchSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    initator: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Player' },
    target: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Player' },
    status: String,
    acceptedAt: Date,
    rejectedAt: Date,
    completedAt: Date,
}, { collection: 'match' });
var Match = mongoose_1.model('Match', matchSchema);
exports.default = Match;
