const mongoose = require('mongoose');
const schema = require('mongoose').Schema;

const db = require('../db');

db.dbconnection();

const vendorschema = new schema({
    vendor_name: {
        type : [String,"please enter string only!"],
        required : [true,"please enter name!"]
    },
    vendor_from : {
        type : [String,"please enter string only!"],
        required : [true,"please enetr from location!"]
    },
    transport : {
        type : [String,"please enter string only!"],
        required : [true,"please enetr transport number!"]
    },
    products : {
        type : [Number,"please enter number only!"],
        required : [true,"eneter total products!"]
    }

})

const vendormodel = mongoose.model('vendors',vendorschema);

module.exports = vendormodel;