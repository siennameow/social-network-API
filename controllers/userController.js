const { User, Thought } = require('../models');

module.exports = {
    //Get al users
    getUser(req, res) {
        User.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    //Get single user
    getSingleUser(req,res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) => 
        !user
            ? res.status(404).json({ message: 'No User find with that ID!'})
            : res.json(user)
            )
        .catch((err) => res.status(500).json(err));
    },
    //create a user
    createUser(req,res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    //update a user
    updateUser(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
        !user
            ? res.status(404).json({ message: 'No User find with this ID!'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    //delete a user
    //BONUS: Remove a user's associated thoughts when deleted.

    //add a friend

    //delete a friend
};