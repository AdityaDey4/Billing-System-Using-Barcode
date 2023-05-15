const express=require("express");
const router=express.Router();
const Coustomer=require("../models/cdatabase.js");
const { route } = require("./product.js");
router.post("/add",async(req,res)=>{
    console.log(req.body);
    var input={
        name:req.body.cname,
        phone:req.body.cphone
    }
    await Coustomer.create(input);
    res.json({msg:"Successfull"});
});

router.get("/show",async(req,res)=>{
    var find=await Coustomer.find();
    res.json(find);
});

router.post("/delete",async(req,res)=>{
    await Coustomer.findByIdAndDelete(req.body.id);
    res.json({msg:"Deleted"});
})
module.exports=router;