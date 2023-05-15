const express=require("express");
const router=express.Router();
const Product=require("../models/pdatabase.js");
const fs=require("fs");
router.post("/add",async(req,res)=>{
    console.log(req.body);
    var obimg=req.files.pimg;
    obimg.mv("./uploads/"+obimg.name, async(err)=>{
        if(err){
            throw err;
        }
        else{
            input={
                name:req.body.name,
                category:req.body.category,
                image:obimg.name,
                barcode:req.body.barcode,
                date:req.body.pdate,
                price:req.body.price,
            }
            await Product.create(input);
        }
    })
    res.json({msg:"Submitted"});
});

router.get("/show",async(req,res)=>{
    var display=await Product.find();
    res.json(display);
});

router.post("/delete",async(req,res)=>{
    var findimg=await Product.findById(req.body.id);
    if(findimg!=null){
        await fs.unlinkSync("./uploads/"+findimg.image);
    }


    await Product.findByIdAndDelete(req.body.id);
    res.json({msg:"Deleted"});
});

router.post("/edit",async(req,res)=>{
    var find=await Product.findById(req.body.id);
    res.json(find);
});

router.post("/update",async(req,res)=>{
    if(req.files){
    var obimg=req.files.pimg;
    obimg.mv("./uploads/"+obimg.name, async(err)=>{
        if(err){
            throw err;
        }
        else{
            input={
                name:req.body.name,
                category:req.body.category,
                image:obimg.name,
                barcode:req.body.barcode,
                date:req.body.pdate,
                price:req.body.price
            }
            await Product.findByIdAndUpdate(req.body.id,input);
        }
    })
    res.json({msg:"Updated"});
}
    else{
        input={
            name:req.body.name,
            category:req.body.category,
                
            barcode:req.body.barcode,
            date:req.body.pdate,
            price:req.body.price
        }
        await Product.findByIdAndUpdate(req.body.id,input);
        res.json({msg:"Updated"});
    }
});


module.exports=router;