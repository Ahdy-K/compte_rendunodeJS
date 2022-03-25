const router = require('express').Router();
const {user} = require('../models/User');

// add user to DB 
router.post('',async (req,res)=>{
    try {
        let user = new user(req.body);
        user = await user.save();
        res.send(user);
    } catch (error) {
        res.status(400).send('Error saving user :'+error.message);
    }
    
});

// get All users
router.get('',async (req,res)=>{
    try {
        let users = await user.find();
        res.send(users)
    } catch (error) {
        res.status(400).send('Error saving course :'+error.message);
    }
    
});

//update
router.put('/:id',async (req,res)=>{
    try {
       await user.updateOne({_id : req.params.id}, req.body);
        res.send(await user.findById(req.params.id));
    } catch (error) {
        res.status(400).send('Error updating user :'+error.message);
    }
    
});

router.delete('/:id',async (req,res)=>{
    try {
        let user = await user.findByIdAndRemove(req.params.id);
        if(!user)
            return res.status(404).send('User with id is not found');
        res.send(user);
    } catch (error) {
        res.status(400).send('Error Deleting User :'+error.message);
    }
    
});

module.exports=router;