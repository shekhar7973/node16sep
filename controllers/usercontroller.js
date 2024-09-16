const users=require('../users.json');

function getAlluser(req,res){
    try{
        res.json(users);
    }catch(err){

    }
}
module.exports={
    getAlluser
}