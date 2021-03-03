const Student = require('../app/student');
// import the assert

const assert = require('assert')

// describe 
describe('Create Tests' , () => {
    it('create a user in db' , () => {
        // assert(true);
        // assert(false);
        const jack = new Student({name : 'Jack'});
        jack.save()
            .then(
                () => {
                    assert(!jack.isNew);
                }
            )
            .catch( () => {
                console.log('error');
            })
    })
})



// All read Tests


describe('Read Tests' , () => {
    let reader;

    beforeEach(
        (done) => {
            reader = new Student({name : 'Reader'})
            reader.save()
            // using a then catch 
                .then(() => {
                    done();
                })
        }
    );
    it(
        'Read a user : Reader' , (done) => {
            Student.find({name : 'Reader'})
            .then((students) => {
                //  id is a BSON value
                assert(reader._id.toString() === students[0]._id.toString());
                done();
            })
        }
    )
})

// All delete options


describe("Delete Tests" , () => {
    let deleter;

    beforeEach(() => {
        deleter = new Student({name : 'Deleter'})
        deleter.save()
        .then(() => done())
    })
    it('a delete test for deleter' , (done) => {
        Student.findByIdAndDelete(deleter._id)
        .then(()  => Student.findOne({  name: 'Deleter' }))
        .then((student) => {
            assert(student === null);
            done();
        })
})

})

// All Updates Tests

describe('Update Tests' , () => {
    let updater;

    beforeEach((done) => {
        updater = new Student({name : 'Updater'})
        updater.save()
        .then(() => done())
    })
    it('Set an Save Test' , () => {
        updater.set('name ' , 'upUpdater');
        updater.save()
            .then(() => Student.find({}))
            .then((students) => {
                assert(students[0].name !== 'Updater');
                assert(students[0].name === 'upUpdater');

            })
    })
})