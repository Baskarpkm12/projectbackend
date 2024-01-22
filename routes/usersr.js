const userscontroll =require('../controlls/userc');
const router = require('express').Router();

router.get('/read',userscontroll.readusers);
router.get('/readspesific/:id',userscontroll.readspesific);
router.post('/add',userscontroll.adduser);
router.put('/update',userscontroll.updateuser);
router.delete('/dalete/:id',userscontroll.deleteuser)

module.exports = router;