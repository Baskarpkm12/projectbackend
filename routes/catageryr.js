const catagerycontroll =require('../controlls/catagoryc');
const router = require('express').Router();

router.get('/read',catagerycontroll.readcatagory);
router.post('/add',catagerycontroll.addcatagory);
router.put('/update',catagerycontroll.updatecatagory);
router.delete('/dalete',catagerycontroll.deletecatagory)

module.exports = router;