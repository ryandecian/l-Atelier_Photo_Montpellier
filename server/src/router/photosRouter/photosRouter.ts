import express from "express";

const photosRouter = express.Router();

// Import des Middlewares :
import photosGetResponse from "./photosResponse/photosGetResponse";
import photosPostResponse from "./photosResponse/photosPostResponse";
import photosDeleteResponse from "./photosResponse/photosDeleteResponse";

photosRouter.get("/",);

photosRouter.post("/",);

photosRouter.delete("/",);

export default photosRouter;