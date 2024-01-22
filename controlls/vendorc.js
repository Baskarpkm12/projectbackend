const vendormodel =require('../models/vendorm');

async function readvendor(req, res) {
    try {
        const obj = req.body;
        const results = await vendormodel.find(obj);
        if(results.length > 0)
            res.json({"data": results, "msg": "success"});
        else
            res.json({"data": [], "msg": "vendor not found"});
    
    } catch (err) {
        res.json({ "error": err.message });
    }
}
async function readspesific(req, res) {
    try {
        const obj = req.params.id;
        const results = await vendormodel.find({_id:obj}).sort({"_id": -1});
        if(results.length > 0)
            res.json({"data": results, "msg": "success"});
        else
            res.json({"data": [], "msg": "vendor not found"});
    
    } catch (err) {
        res.json({ "error": err.message });
    }
}

async function addvendor(req, res) {
    try {
        const obj = req.body;
        if(JSON.stringify(obj) !== "{}") {
            const resultsArr = await vendormodel.find({"vendor_name": obj.vendor_name});
            if(resultsArr.length > 0)
                res.json({"msg":"vendor already Exists!"});
            else {
                const insertvendor = new vendormodel(obj);
                await insertvendor.save();
                res.json({"msg":"vendor added successfully!"});
            }
        } else
            res.json({"msg":"No Data to add"});
    } catch (err) {
        res.json({ "error": err.message });
    }
}

async function deletevendor(req, res) {
    try {
        const obj = req.params.id;
        if(JSON.stringify(obj) !== "{}") {
            const resultsArr = await vendormodel.find({"_id": obj});
    
            if(resultsArr.length > 0) {
                const results = await vendormodel.deleteOne(obj);
                console.log(results);
                if(results.deletedCount !== "")
                    res.json({"msg":"vendor has been deleted successfully!"});
                else
                    res.json({"msg":"Unable to delete vendor"});
            } else {
                res.json({"msg":"No Data to Delete"});   
            }
        } else
            res.json({"msg":"No Data to Delete"});
    } catch (err) {
        res.json({ "error": err.message });
    }
}

async function updatevendor(req, res) {
    try {
        const obj = req.body;
        if(JSON.stringify(obj) !== "{}") {
            const resultsArr = await vendormodel.find({"_id": obj.id});
    
            if(resultsArr.length > 0) {
                const opts = { runValidators: true };

                const results = await vendormodel.updateOne({"_id": obj.id}, {$set: obj}, opts);
                console.log(results);
                if(results.modifiedCount !== "")
                    res.json({"msg":"vendor has been updated successfully!"});
                else
                    res.json({"msg":"Unable to update vendor"});
            } else {
                res.json({"msg":"No Data to Update"});   
            }
        } else
            res.json({"msg":"No Data to Update"});
    } catch (err) {
        res.json({ "error": err.message });
    }
}

module.exports ={readvendor,readspesific,addvendor,updatevendor,deletevendor};