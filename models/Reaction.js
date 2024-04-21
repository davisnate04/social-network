const { Schema, Types } = require("mongoose");
const currentDate = require("../utils/date");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: String,
            default: () => currentDate(),
        },
    }
)

module.exports = reactionSchema;