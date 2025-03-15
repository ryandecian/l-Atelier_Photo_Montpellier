import express from "express";
import { Request, Response } from "express";

const albumRouter = express.Router();

// Import des Middlewares :
import albumGetResponse from "./albumResponse/albumGetResponse";
import albumPostResponse from "./albumResponse/albumPostResponse";

albumRouter.get("/", 
    albumGetResponse,
);

albumRouter.post("/", 
    albumPostResponse,
);

albumRouter.put("/", (req: Request, res: Response) => {
    res.status(200).json({
        reponse: "Route Put ok : Modification album",
    });
});

albumRouter.delete("/", (req: Request, res: Response) => {
    res.status(200).json({
        reponse: "Route Post ok : Suppression album",
    });
});

export default albumRouter;