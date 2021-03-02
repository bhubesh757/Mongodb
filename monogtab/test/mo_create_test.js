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
            reader = Student({name : 'Reader'})
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