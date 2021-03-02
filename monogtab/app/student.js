// import mongoose from 'mongoose'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// just taking the schema from the mongoose library
const StudentSchema = new Schema({
    name : String

});

// entry for the file
const Student = mongoose.model('student' ,StudentSchema);

// export

module.exports = Student;