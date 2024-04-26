import uploadFile from "../utils/cloudinary/uploadFile.util.cloudinary.js";

const upload_file_controller = async (req, res) => {
    try {
        // Add your file upload logic here using the uploadFile utility function
    } catch (err) {
        console.log("Error Uploading File To Cloudinary");
        res.status(500).json({
            error_msg: err
        });
    }
};

export const funcs = {
    upload_file_controller
};
