
const { User } = require('../models');

const userData = [{
        username: 'Conley',
        password: 'cMarie'

    },
    {
        username: 'Anthea',
        password: 'aEliza'
    },
    {
        username: 'Dayne',
        password: 'dAntho'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;