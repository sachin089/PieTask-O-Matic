import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config();

var URI = "mongodb+srv://sachinparmar98134:sachin123@cluster0.ybjfbpw.mongodb.net/?retryWrites=true&w=majority";

async function connectDB(){
    try{
        await mongoose.connect(URI);
        console.log("successfully connected to database");
    }
    catch(err){
        console.log("Problem connecting to database");
        console.log(err);
    }
}


export default connectDB;