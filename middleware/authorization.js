
function checkAdmin(req,res,next){
    if(req.user.role!='admin')
        return res.status(401).send('Sorry you are not authorized (*_*).')
    
    next();
}

module.exports=checkAdmin;