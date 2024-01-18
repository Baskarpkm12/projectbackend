const mongoose = require('mongoose');
const schema = require('mongoose').Schema;

const db = require('../db');

db.dbconnection();

const saleschema = new schema({
    sale_id : {
        type : String,
        required : [true,"id is important!"]
    },
    payment_id: {
        type : String,
        required : [true,"please enter payment id!"]
    },
    to : {
        type : String,
        required : [true,"please enetr this field!"]
    },
    date : {
        type : Date,
        required : [true,"please enetr to date!"]
    },
    products : {
        type : Number,
        required : [true,"eneter total products!"]
    }

})

const salemodel = mongoose.model('sales',saleschema);

module.exports = salemodel;