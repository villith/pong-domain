"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var resultSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    match: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Match' },
    initatorScore: Number,
    targetScore: Number,
}, { collection: 'result' });
var Result = mongoose_1.model('Result', resultSchema);
exports.default = Result;
