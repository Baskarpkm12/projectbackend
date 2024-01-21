const mongoose = require('mongoose');
const schema = require('mongoose').Schema;

const db = require('../db');

db.dbconnection();

const catagoryschema = new schema({
    ctg_name: {
        type : String,
        required : [true,"please enter name!"]
    },
    ctg_location : {
        type : String,
        required : [true,"please enetr location!"]
    },
    products : {
        type : Number,
        required : [true,"eneter total products!"]
    }

})

const catagorymodel = mongoose.model('catagories',catagoryschema);

module.exports = catagorymodel;