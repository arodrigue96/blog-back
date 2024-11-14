import express from "express";
import morgan from "morgan";
import postRouter from "../router/postRouter.js";

const app = express();

app.use(morgan("dev"));

app.use("/posts", postRouter);

export default app;
