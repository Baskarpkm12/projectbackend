const mongoose = require('mongoose');
const schema = require('mongoose').Schema;

const db = require('../db');

db.dbconnection();

const usersschema = new schema({
    username: {
        type : String,
        required : [true,"please enter name!"]
    },
    password : {
        type : String,
        required : [true,"please enetr password"]
    },
    cart : {
        type : Object
    }
})

const usersmodel = mongoose.model('users',usersschema);

module.exports = usersmodel;