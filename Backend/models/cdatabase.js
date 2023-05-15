const mongoose=require("mongoose");
const cousschema=mongoose.Schema({
    name:String,
    phone:String
});

module.exports=mongoose.model("Coustomer",cousschema);