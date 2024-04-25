import dotenv from "dotenv";
dotenv.config({
    path : "./src/.env"
});
import connectDb from "./db/connectDb.js";
import app from "./app.js";
connectDb().then(()=>{
    app.listen(process.env.PORT , (err)=>{
        if (err){
        console.log("App Error");
        }else{
            console.log("App is listening on Port",process.env.PORT)
        }
    })
})