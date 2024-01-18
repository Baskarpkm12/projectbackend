// mongodb+srv://baskarpkm12:<password>@baskar.wfv0wbc.mongodb.net/
require ('dotenv').config();
const mongoose = require('mongoose');

async function dbconnection(){
    try{
        await mongoose.connect(process.env.URL);
        console.log("connection successfully..");
    }
    catch (e) {
        console.log(e.message);
    }
}
module.exports = {dbconnection};