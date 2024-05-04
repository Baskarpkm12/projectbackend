const productsmodel =require('../models/productsm');

async function readproducts(req, res) {
    try {
        const obj = req.body;
        console.log(obj);
        const results = await productsmodel.find(obj).sort({'_id': -1});
        if(results.length > 0)
            res.json({"data": results, "msg": "success"});
        else
            res.json({"data": [], "msg": "product not found"});
    
    } catch (err) {
        res.json({ "error": err.message });
    }
}
async function readspesific(req, res) {
    try {
        const obj = req.params.id;
        const results = await productsmodel.find({_id:obj}).sort({"_id": -1});
        if(results.length > 0)
            res.json({"data": results, "msg": "success"});
        else
            res.json({"data": [], "msg": "product not found"});
    
    } catch (err) {
        res.json({ "error": err.message });
    }
}
async function addproduct(req, res) {
    try {
        let obj = req.body;
        const photo = req.protocol + '://' + req.get('host') + "/uploads/" + req.file.filename;
        obj.photo = photo;
        if(JSON.stringify(obj) !== "{}") {
            const resultsArr = await productsmodel.find({"p_name": obj.p_name});
            // const opts = {runValidators : true};
    
            if(resultsArr.length > 0)
                res.json({"msg":"product already Exists!"});
            else {
                const insertproduct = new productsmodel(obj);
                await insertproduct.save();
                res.json({"msg":"product added successfully!"});
            }
        } else
            res.json({"msg":"No Data to add"});
    } catch (err) {
        res.json({ "error": err.message });
    }
}

async function deleteproduct(req, res) {
    try {
        const obj = req.params.id;
        console.log(obj);
        if(JSON.stringify(obj) !== "{}") {
            const resultsArr = await productsmodel.find({"_id": obj});
    
            if(resultsArr.length > 0) {
                const results = await productsmodel.deleteOne({"_id":obj});
                console.log(results);
                if(results.deletedCount !== "")
                    res.json({"msg":"product has been deleted successfully!"});
                else
                    res.json({"msg":"Unable to delete product"});
            } else {
                res.json({"msg":"No Data to Delete"});   
            }
        } else
            res.json({"msg":"No Data to Delete"});
    } catch (err) {
        res.json({ "error": err.message });
    }
}

async function updateproduct(req, res) {
    try {
        const obj = req.body;
        console.log(obj);
        console.log(obj.id);
        if(JSON.stringify(obj) !== "{}") {
            const resultsArr = await productsmodel.find({"_id": obj._id});
    
            if(resultsArr.length > 0) {
                const opts = { runValidators: true };

                const results = await productsmodel.updateOne({"_id": obj._id}, {$set: obj}, opts);
                console.log(results);
                if(results.modifiedCount !== "")
                    res.json({"msg":"product has been updated successfully!"});
                else
                    res.json({"msg":"Unable to update product"});
            } else {
                res.json({"msg":"No Data to Update"});   
            }
        } else
            res.json({"msg":"No Data to Update"});
    } catch (err) {
        res.json({ "error": err.message });
    }
}

module.exports ={readproducts,readspesific,addproduct,updateproduct,deleteproduct};