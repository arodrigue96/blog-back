import express from "express";
import morgan from "morgan";
import postRouter from "../router/postRouter.js";
import handleEndpointNotFound from "./errors/handleEndpointNotFound/handleEndpointNotFound.js";

const app = express();

app.use(morgan("dev"));

app.use("/posts", postRouter);

app.use(handleEndpointNotFound);

export default app;
