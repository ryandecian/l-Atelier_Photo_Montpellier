import express from "express";
import { Request, Response } from "express";

const albumRouter = express.Router();

// Import des Middlewares :
import albumGetResponse from "./albumResponse/albumGetResponse";
import albumPostResponse from "./albumResponse/albumPostResponse";
import albumPutResponse from "./albumResponse/albumPutResponse";
import albumDeleteResponse from "./albumResponse/albumDeleteResponse";

albumRouter.get("/", 
    albumGetResponse,
);

albumRouter.post("/", 
    albumPostResponse,
);

albumRouter.put("/", 
    albumPutResponse,
);

albumRouter.delete("/", 
    albumDeleteResponse,
);

export default albumRouter;
