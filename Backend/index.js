const express=require("express");
const cors=require("cors");
require("dotenv").config();
const expressFileupload=require("express-fileupload");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const fs=require("fs");

const connectDB = async ()=> {
    try{

        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.DATABASE_URL, {
            useUnifiedTopology : true,
            useNewUrlParser : true
        });
        console.log("Connected with Mongo DB");
      }catch(err) {
          console.log("Error while connect");
          console.error(err);
      }
}

connectDB();

const PORT = process.env.PORT || 5500;

const app=express();
app.use(express.static('uploads'));

app.use(cors());
app.use(expressFileupload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const pr=require("./routes/product.js");
const cr=require("./routes/coustomer.js");
const br=require("./routes/bill.js");


app.use("/product",pr);
app.use("/coustomer",cr);
app.use("/bill",br);

app.listen(PORT, ()=> {
    console.log("Server is running in PORT : "+PORT);
});