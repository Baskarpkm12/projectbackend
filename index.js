const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
    origin:['http://127.0.0.1:5173', 'http://localhost:5173', ]
}));

const productsroute = require('./routes/productsr');
const catageryroute = require('./routes/catageryr');
const vendorroute = require('./routes/vendorr');
const saleroute = require('./routes/saler');
const paymentroute = require('./routes/paymentr');

app.use("/product",productsroute);
app.use("/catagery",catageryroute);
app.use("/vendor",vendorroute);
// app.use("/sale",saleroute);
// app.use("/payment",paymentroute);

app.listen(process.env.PORT,()=> console.log("server started in PORT 5000"));