import express from "express";
import { Request, Response } from "express";

const albumRouter = express.Router();

// Import des Middlewares :
import albumGetResponse from "./albumResponse/albumGetResponse";
import albumPostResponse from "./albumResponse/albumPostResponse";
import albumPutResponse from "./albumResponse/albumPutResponse";
import albumDeleteResponse from "./albumResponse/albumDeleteResponse";

// URI : /api/album
albumRouter.get("/", 
    albumGetResponse,
);

// URI : /api/album
albumRouter.post("/", 
    albumPostResponse,
);

// URI : /api/album/:id
albumRouter.put("/:id", 
    albumPutResponse,
);

// URI : /api/album/:id
albumRouter.delete("/:id", 
    albumDeleteResponse,
);

export default albumRouter;
