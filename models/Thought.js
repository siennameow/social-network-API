const { Schema, model } = require('mongoose');

// thought schema
const thoughtSchema = new Schema (
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

// get total count of friends
thoughtSchema.virtual('reactionCount')
.get(function() {
    return this.reactions.length;
})

// create the User model using the UserSchema
const Thought = model('Thought', thoughtSchema);
// export the Thought model
module.exports = Thought;