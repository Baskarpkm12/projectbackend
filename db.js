// mongodb+srv://baskarpkm12:<password>@baskar.wfv0wbc.mongodb.net/
// const app = express();//1
require ('dotenv').config();
const mongoose = require('mongoose');
// const session=require("express-session");//2
// const mongodbsession= require("connect-mongodb-session")(session)//3
async function dbconnection(){
    try{
        await mongoose.connect(process.env.URL);
        console.log("connection successfully..");
    }
    catch (e) {
        console.log(e.message);
    }
}
// const store=new mongodbsession({//4
    // uri: process.env.URL,
    // collection: "mysession"
// })

// app.use(session({//5
// secret:"key",
// resave:false,
// saveUninitialized:false,
// store:store,
// }))
module.exports = {dbconnection};