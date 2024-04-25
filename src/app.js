import express from "express";
import cors from "cors";

const app = express().use(express.json({limit : "14kb"})).use(cors()).use(express.static("public"));
export default app;

