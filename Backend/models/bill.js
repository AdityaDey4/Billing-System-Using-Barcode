const mongoose=require("mongoose");
const bschema=mongoose.Schema({
    name:String,
    phone:String,
    date:String,
    order_id:String
});

module.exports=mongoose.model("Bill",bschema);