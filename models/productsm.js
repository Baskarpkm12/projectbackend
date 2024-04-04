const mongoose = require('mongoose');
const schema = require('mongoose').Schema;

const db = require('../db');

db.dbconnection();

const productschema = new schema({
    p_name: {
        type : String,
        required : [true,"please enter name!"]
    },
    p_prize : {
        type : Number,
        required : [true,"please enter prise value!"]
    },
    p_qty : {
        type : Number,
        required : [true,"please enter qty(quantity)!"]
    },
    ctg_id : {
        type : String,
        required : [true,"please enter ctg_id(catagery_id)!"]
    },
    p_location : {
        type : String,
        required : [true,"please enetr location!"]
    },
    photo: {
        type: String,
    },
    vendor_id : {
        type : String,
        required : [true,"eneter vendor_id!"]
    },
    date : {
        type : String,
        required : [true,"enter date!"]
    },
    batch : {
        type : String
    },
    totalsale : {
        type : Number
    }

})

const productsmodel = mongoose.model('products',productschema);

module.exports = productsmodel;