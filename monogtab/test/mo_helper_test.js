const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // ES6 promise
// getting a connection from mongodb


// 

before((done) => {

    mongoose.connect('mongodb://localhost/mongotab' , {useNewUrlParser: true});
    mongoose.connection
        .once('open' , () => {
            done();
            // console.log('Connected');
        })
        .on('error', (error) => {
            console.log('Your Error' , error);
        });

});



beforeEach((done) => {
    mongoose.connection.collections.students.drop(
        () => {
            done();
            console.log('drop is Success');
        }
    )
})

