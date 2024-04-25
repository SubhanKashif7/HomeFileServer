import mongoose from "mongoose";
import databaseName from "../constants.js";
const connectDb = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`);
        console.log("MONGO DB CONNECTED SUCCESSFULLY");
        return connectionInstance;
    }catch (err){
        console.log("MONGO DB CONNECTION ERROR",err)
    }
};

export default  connectDb;