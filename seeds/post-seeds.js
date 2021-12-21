
const { Post } = require('../models');

const postData = [{
        title: 'New Industry Secrets',
        content: 'Whistleblower "blows" lid on whole operation',
        user_id: 1

    },
    {
        title: 'Blog post 2',
        content: 'All the lorem ipsum stuff',
        user_id: 2
    },
    {
        title: 'Blog post 3',
        content: 'lorem ipsum dolor sit amet, consectetur',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;