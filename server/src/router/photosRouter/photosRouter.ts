import express from "express";

const photosRouter = express.Router();

// Import des Middlewares :
import photosGetResponse from "./photosResponse/photosGetResponse";
import photosPostResponse from "./photosResponse/photosPostResponse";
import photosDeleteResponse from "./photosResponse/photosDeleteResponse";

// URI : /api/photos
photosRouter.get("/",
    photosGetResponse,
);

// URI : /api/photos/upload
photosRouter.post("/upload",
    photosPostResponse,
);

// URI : /api/photos/:id
photosRouter.delete("/:id",
    photosDeleteResponse,
);

export default photosRouter;
