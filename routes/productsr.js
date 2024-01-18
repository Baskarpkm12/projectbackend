const productcontroll =require('../controlls/productsc');
const router = require('express').Router();

router.get('/read',productcontroll.readproducts);
router.get('/readspesific/:id',productcontroll.readspesific);
router.post('/add',productcontroll.addproduct);
router.put('/update',productcontroll.updateproduct);
router.delete('/delete/:id',productcontroll.deleteproduct)

module.exports = router;