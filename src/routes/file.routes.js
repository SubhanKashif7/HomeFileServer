import { Router } from "express";
const fileRouter = Router();
import { funcs } from "../controllers/file.controller.js";
import upload from "../middlewares/multer.middleware.js";
export default fileRouter;

fileRouter.route("/uploadFile").post(upload.any(),funcs.upload_file_controller)