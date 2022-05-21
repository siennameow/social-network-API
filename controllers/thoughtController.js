const { User, Thought } = require('../models');

module.exports = {
    // Get all thoughts
    getThought(req,res) {
        Thought.find({})
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    // get single thought
    getSingleThought(req,res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) =>
        !thought
            ? res.status(404).json({ message: 'No Thought find with this ID!'})
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    //create a thought

    //update a thought

    //delete a thought

    //create reaction

    //delete reaction
};