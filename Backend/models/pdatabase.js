const mongoose=require("mongoose");
const proschema=mongoose.Schema({
    name:String,
    category:String,
    image:String,
    barcode:String,
    date:String,
    price:String
});

module.exports=mongoose.model("Product",proschema);