const vendorcontroll =require('../controlls/vendorc');
const router = require('express').Router();

router.get('/read',vendorcontroll.readvendor);
router.get('/readspesific/:id',vendorcontroll.readspesific);
router.post('/add',vendorcontroll.addvendor);
router.put('/update',vendorcontroll.updatevendor);
router.delete('/dalete/:id',vendorcontroll.deletevendor)

module.exports = router;