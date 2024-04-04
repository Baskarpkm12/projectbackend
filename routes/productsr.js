const productcontroll =require('../controlls/productsc');
const router = require('express').Router();
const multer = require('multer');
const DIR = "./uploads/";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix+'-'+fileName);
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


router.get('/read',productcontroll.readproducts);
router.get('/readspesific/:id',productcontroll.readspesific);
router.post('/add',upload.single('photo'), productcontroll.addproduct);
router.put('/update',productcontroll.updateproduct);
router.delete('/delete/:id',productcontroll.deleteproduct)

module.exports = router;