const {wt, wtValidation} = require('../models/WhiteTest')
const router = require('express').Router()

function validation(validator, res){
    let result = validator.validate(res.body)
    if(!result)
    res.status(400).send(result)
}
router.get('/', async(req, res)=>{
    res.status(200).send(await wt.find())
})
router.get('/:title', async(req, res)=>{
    let wt1= await wt.find({title:req.params.title})
    if(!wt1)
    res.status(400).send("couldnt find any white test with that title")
    res.status(200).send(wt1)
})
router.post('/', async(req, res)=>{
    validation(wtValidation,res)
    let wt1= new wt(req.body)
    
    
    res.status(200).send(await wt1.save())
})
module.exports=router