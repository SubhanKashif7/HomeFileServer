import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";     
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadFile = async (fpath) => {
    try{
        if (!fpath) return null
        // UPLOAD THE FILE ON CLOUDINARY
        const resposne = await cloudinary.uploader.upload(fpath,{
            resource_type : "auto"
        });
        console.log("FILE UPLOAD TO CLOUDINARY SUCCESSFULLY",resposne);
        return resposne;
    }catch (error){
        fs.unlinkSync(fpath) // REMOVE THE LOCAL SAVED TEMP FILE ON THE SERVER;

    }
};

export default uploadFile;