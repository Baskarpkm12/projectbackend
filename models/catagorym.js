const mongoose = require('mongoose');
const schema = require('mongoose').Schema;

const db = require('../db');

db.dbconnection();

const catagoryschema = new schema({
    ctg_id : {
        type : [Number,"please enter number only!"],
        required : [true,"id is important!"]
    },
    ctg_name: {
        type : [String,"please enter string only!"],
        required : [true,"please enter name!"]
    },
    ctg_location : {
        type : [String,"please enter string only!"],
        required : [true,"please enetr location!"]
    },
    products : {
        type : [Number,"please enter number only!"],
        required : [true,"eneter total products!"]
    }

})

const catagorymodel = mongoose.model('catagories',catagoryschema);

module.exports = catagorymodel;