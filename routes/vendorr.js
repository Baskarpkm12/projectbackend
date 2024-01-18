const vendorcontroll =require('../controlls/vendorc');
const router = require('express').Router();

router.get('/read',vendorcontroll.readvendor);
router.post('/add',vendorcontroll.addvendor);
router.put('/update',vendorcontroll.updatevendor);
router.delete('/dalete',vendorcontroll.deletevendor)

module.exports = router;