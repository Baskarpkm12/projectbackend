const usersmodel =require('../models/userm');

async function readusers(req, res) {
    try {
        const obj = req.body;
        console.log(obj);
        const results = await usersmodel.find(obj).sort({'_id': -1});
        if(results.length > 0)
            res.json({"data": results, "msg": "success"});
        else
            res.json({"data": [], "msg": "user not found"});
    
    } catch (err) {
        res.json({ "error": err.message });
    }
}
async function readspesific(req, res) {
    try {
        const obj = req.params.id;
        const results = await usersmodel.find({_id:obj}).sort({"_id": -1});
        if(results.length > 0)
            res.json({"data": results, "msg": "success"});
        else
            res.json({"data": [], "msg": "user not found"});
    
    } catch (err) {
        res.json({ "error": err.message });
    }
}
async function login(req, res) {
    try {
        const obj = req.params.username;
        const results = await usersmodel.find({username:obj}).sort({"_id": -1});
        if(results.length > 0)
            res.json({"data": results, "msg": "user already existied!"});
        else
            res.json({"data": [], "msg": "user not found"});
    
    } catch (err) {
        res.json({ "error": err.message });
    }
}
async function adduser(req, res) {
    try {
        const obj = req.body;
        if(JSON.stringify(obj) !== "{}") {
            const resultsArr = await usersmodel.find({"username": obj.username});
            // const opts = {runValidators : true};
    
            if(resultsArr.length > 0)
                res.json({"msg":"user already Exists!"});
            else {
                const insertproduct = new usersmodel(obj);
                await insertproduct.save();
                res.json({"msg":"user added successfully!"});
            }
        } else
            res.json({"msg":"No Data to add"});
    } catch (err) {
        res.json({ "error": err.message });
    }
}

async function deleteuser(req, res) {
    try {
        const obj = req.params.id;
        console.log(obj);
        if(JSON.stringify(obj) !== "{}") {
            const resultsArr = await usersmodel.find({"_id": obj});
    
            if(resultsArr.length > 0) {
                const results = await usersmodel.deleteOne({"_id":obj});
                console.log(results);
                if(results.deletedCount !== "")
                    res.json({"msg":"user has been deleted successfully!"});
                else
                    res.json({"msg":"Unable to delete user"});
            } else {
                res.json({"msg":"No Data to Delete"});   
            }
        } else
            res.json({"msg":"No Data to Delete"});
    } catch (err) {
        res.json({ "error": err.message });
    }
}

async function updateuser(req, res) {
    try {
        const obj = req.body;
        console.log(obj);
        console.log(obj.username);
        if(JSON.stringify(obj) !== "{}") {
            const resultsArr = await usersmodel.find({"username": obj.username});
    
            if(resultsArr.length > 0) {
                const opts = { runValidators: true };
                
                const results = await usersmodel.updateOne({"username": obj.username}, {$set: obj}, opts);
                console.log(results);
                if(results.modifiedCount !== "")
                    res.json({"msg":"user has been updated successfully!"});
                else
                    res.json({"msg":"Unable to update user"});
            } else {
                res.json({"msg":"No Data to Update"});   
            }
        } else
            res.json({"msg":"No Data to Update"});
    } catch (err) {
        res.json({ "error": err.message });
    }
}

module.exports ={readusers,readspesific,login,adduser,updateuser,deleteuser};