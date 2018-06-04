// Create_test.js: will create a user to add to the database
const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
    it('Saves a User 1', (done) => {
        const joe = new User({
            name: 'Joe'
        });

        joe.save().then(() => {
            assert(!joe.isNew);
            done();
        });
    });
    it('Saves a User 2', (done) => {
        const maria = new User({
            name: 'Maria'
        });

        maria.save().then(() => {
            assert(!maria.isNew);
            done();
        });
    });
});