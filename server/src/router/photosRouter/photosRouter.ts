import express from "express";

const photosRouter = express.Router();

// Import des Middlewares :
import photosGetResponse from "./photosResponse/photosGetResponse";
import photosPostResponse from "./photosResponse/photosPostResponse";
import photosDeleteResponse from "./photosResponse/photosDeleteResponse";

photosRouter.get("/",
    photosGetResponse,
);

photosRouter.post("/upload",
    photosPostResponse,
);

photosRouter.delete("/:id",
    photosDeleteResponse,
);

export default photosRouter;
