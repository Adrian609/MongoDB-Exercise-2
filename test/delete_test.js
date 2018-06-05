const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({
            name: 'Joe'
        });
        joe.save()
            .then(() => done());
    });

    it('model instance remove', (done) => {
        /* 
        Joe.remove() returns a promose we (.)then to chain User.findOne() which returns 
        a promise if the name of Joe was found. (.)then chain user to assert if there 
        was a user with the name Joe in the DB to verify user ===null.
        */
        joe.remove().then(() => User.findOne({
            name: 'Joe'
        })).then((user) => {
            assert(user === null);
            done();
        })
    });

    it('class method remove', (done) => {
        /*
        class method remove, romoves every user with the name of Joe.
        class method remove is goof for deleting every instance or an object
        in a class.
        */
        User.remove({
                name: 'Joe'
            })
            .then(() => User.findOne({
                name: 'Joe'
            }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });


    it('class method findAndRemove', (done) => {
        User.findOneAndRemove({
                name: 'Joe'
            }).then(() => User.findOne({
                name: 'Joe'
            }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class method findByIdAndRemove', (done) => {
        User.findByIdAndRemove(joe._id)
            .then(() => User.findOne({
                name: 'Joe'
            }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });
});