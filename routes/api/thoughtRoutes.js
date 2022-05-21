const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

//  /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(createReaction)
.delete(deleteReaction);

module.exports = router;

