const mongoose = require('mongoose');
const schema = require('mongoose').Schema;

const db = require('../db');

db.dbconnection();

const paymentschema = new schema({
    payment_id : {
        type : [String,"please enter string only!"],
        required : [true,"id is important!"]
    },
    sale_id: {
        type : [String,"please enter string only!"],
        required : [true,"please enter payment id!"]
    },
    date : {
        type : [Date,"please enter date only!"],
        required : [true,"please enetr to date!"]
    }

})

const paymentmodel = mongoose.model('payments',paymentschema);

module.exports = paymentmodel;