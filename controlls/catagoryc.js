const catagorymodel =require('../models/catagorym');

async function readcatagory(req, res) {
    try {
        const obj = req.body;
        const results = await catagorymodel.find(obj);
        if(results.length > 0)
            res.json({"data": results, "msg": "success"});
        else
            res.json({"data": [], "msg": "catagory not found"});
    
    } catch (err) {
        res.json({ "error": err.message });
    }
}

async function addcatagory(req, res) {
    try {
        const obj = req.body;
        if(JSON.stringify(obj) !== "{}") {
            const resultsArr = await catagorymodel.find({"ctg_name": obj.ctg_name});
            const opts = { runValidators: true };
    
            if(resultsArr.length > 0)
                res.json({"msg":"catagory already Exists!"});
            else {
                const insertcatagory = new catagorymodel(obj,opts);
                await insertcatagory.save();
                res.json({"msg":"catagory added successfully!"});
            }
        } else
            res.json({"msg":"No Data to add"});
    } catch (err) {
        res.json({ "error": err.message });
    }
}

async function deletecatagory(req, res) {
    try {
        const obj = req.body;
        if(JSON.stringify(obj) !== "{}") {
            const resultsArr = await catagorymodel.find({"ctg_name": obj.ctg_name});
    
            if(resultsArr.length > 0) {
                const results = await catagorymodel.deleteOne(obj);
                console.log(results);
                if(results.deletedCount !== "")
                    res.json({"msg":"catagory has been deleted successfully!"});
                else
                    res.json({"msg":"Unable to delete catagory"});
            } else {
                res.json({"msg":"No Data to Delete"});   
            }
        } else
            res.json({"msg":"No Data to Delete"});
    } catch (err) {
        res.json({ "error": err.message });
    }
}

async function updatecatagory(req, res) {
    try {
        const obj = req.body;
        if(JSON.stringify(obj) !== "{}") {
            const resultsArr = await catagorymodel.find({"ctg_name": obj.ctg_name});
    
            if(resultsArr.length > 0) {
                const opts = { runValidators: true };

                const results = await catagorymodel.updateOne({"ctg_name": obj.ctg_name}, {$set: obj}, opts);
                console.log(results);
                if(results.modifiedCount !== "")
                    res.json({"msg":"catagory has been updated successfully!"});
                else
                    res.json({"msg":"Unable to update catagory"});
            } else {
                res.json({"msg":"No Data to Update"});   
            }
        } else
            res.json({"msg":"No Data to Update"});
    } catch (err) {
        res.json({ "error": err.message });
    }
}

module.exports ={readcatagory,addcatagory,updatecatagory,deletecatagory};