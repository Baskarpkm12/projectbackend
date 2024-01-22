const catagerycontroll =require('../controlls/catagoryc');
const router = require('express').Router();

router.get('/read',catagerycontroll.readcatagory);
router.get('/readspesific/:id',catagerycontroll.readspesific);
router.post('/add',catagerycontroll.addcatagory);
router.put('/update',catagerycontroll.updatecatagory);
router.delete('/delete/:id',catagerycontroll.deletecatagory)

module.exports = router;