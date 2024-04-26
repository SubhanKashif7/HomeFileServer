import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/user.routes.js";
import bodyParser from "express";
import fileRouter from "./routes/file.routes.js";

const app = express().use(express.json({limit : "14kb"})).use(cors()).use(express.static("public")).use(cookieParser())

;
export default app;


app.use("/api/v1/users",router);
app.use("/api/v1/files",fileRouter);