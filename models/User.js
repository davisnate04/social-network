const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: function(v) {
                    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
                },
                message: props => `${props.value} is not a valid email!`
            },
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }],
        friends: [{type: Schema.Types.ObjectId, ref: 'user'}],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;