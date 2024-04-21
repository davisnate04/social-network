const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const currentDate = require('../utils/date');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: currentDate,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;