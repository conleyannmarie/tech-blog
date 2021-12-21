
const { Comment } = require('../models');

const commentData = [{
        comment_text: "Holy crap wow",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "classic move",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "lorem ipsum bla bla bla",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;