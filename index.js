const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
    origin:['http://127.0.0.1:5173', 'http://localhost:5173', ]
}));
app.use(cors());
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

const productsroute = require('./routes/productsr');
const catagoryroute = require('./routes/catagoryr');
const vendorroute = require('./routes/vendorr');
// const saleroute = require('./routes/saler');
// const paymentroute = require('./routes/paymentr');
const usersroute = require('./routes/usersr');

app.use("/product",productsroute);
app.use("/catagory",catagoryroute);
app.use("/vendor",vendorroute);
app.use("/users",usersroute)
// app.use("/sale",saleroute);
// app.use("/payment",paymentroute);

app.listen(process.env.PORT,()=> console.log("server started in PORT 5000"));