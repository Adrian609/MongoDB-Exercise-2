// Create_test.js: will create a user to add to the database
const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
    it('Saves a User 1', () => {
        const joe = new User ({name: 'Joe'});
        joe.save();
    });
    it('Saves a User 2', () => {
        const maria = new User ({name: 'Maria'});
        maria.save();
    });
});

