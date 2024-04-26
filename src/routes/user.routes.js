import { Router } from "express";
import { funcs } from "../controllers/user.controller.js";
import upload from "../middlewares/multer.middleware.js"
const router = Router();

router.route("/create_user").post(upload.none(),funcs.createUser).get((req,res)=>{
    res.json("Send POST request to this endpoint , GET does nothing... in this endpoint")
});

router.route("/get_users").get(upload.none(),funcs.getUsers)
router.route("/login").get(upload.none(),funcs.loginUser)

export default router;