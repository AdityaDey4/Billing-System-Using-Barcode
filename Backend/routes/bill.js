const express=require("express");
const router=express.Router();
const Coustomer=require("../models/cdatabase.js");
const Product=require("../models/pdatabase.js");
const Cart=require("../models/cart.js");
const Bill=require("../models/bill.js");
const Suborder=require("../models/suborder.js");
router.post("/search",async(req,res)=>{
    var find=await Coustomer.findOne({phone:req.body.seaph});
    if(find!=null){
        res.json(find);
    }
    else{
        res.json({msg:"Invalid Person"});
    }
});

router.post("/add",async(req,res)=>{
    var findcode=await Product.findOne({barcode:req.body.barcode});
    if(findcode!=null){
        var pid=findcode._id;
        var cid=req.body.cid;

        var obj={
            cid:cid,
            pid:pid
        };
        await Cart.create(obj);
        res.json({msg:"add"});

    }
    else{
        res.json({msg:"Invalid"});
    }
});

router.get("/getall",async(req,res)=>{
    var cartdata=await Cart.aggregate([
        {
            $lookup:
            {
                from: "products",
                localField: "pid",
                foreignField: "_id",
                as: "products"
            }
        }
    ]);
    res.json(cartdata);
});

router.post("/del",async (req,res)=>{

    await Cart.findByIdAndDelete(req.body.id);

    res.json({msg:"removed"});

});

router.post("/order_confirm",async(req,res)=>{
    var order=await Bill.findOne().sort('-order_id');
    if(order!=null){
        var order_id=Number(order.order_id)+1;
    }
    else{
        var order_id=1;
    }

    var orderobj={
        name:req.body.cname,
        phone:req.body.cphone,
        date:req.body.date,
        order_id:order_id
    }
    await Bill.create(orderobj);

    var cdata=await Cart.find({cid:req.body.cid});
    var i=0;
    for(i=0;i<cdata.length;i++){
        var pdata=await Product.findById(cdata[i].pid);

        var probj={
            name:pdata.name,
            barcode:pdata.barcode,
            price:pdata.price,
            order_id:order_id
        }
        await Suborder.create(probj);
        await Cart.findByIdAndDelete(cdata[i]._id);
    }

    res.json({msg:"Done"});
});

router.get("/sbill",async (req,res)=>{

    var data=await Bill.find();
    
    res.json(data);

});

router.post("/mbill",async (req,res)=>{

    var data=await Bill.findOne({order_id:req.body.oid})

    var product=await Suborder.find({order_id:req.body.oid});
    
   
    
    res.json({bill:data,products:product});

});


module.exports=router;