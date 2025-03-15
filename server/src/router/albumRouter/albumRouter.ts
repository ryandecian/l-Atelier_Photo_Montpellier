import express from "express";
import { Request, Response } from "express";

const albumRouter = express.Router();

// Import des Middlewares :

albumRouter.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        reponse: "Route Get ok : Récupération de tous les albums",
    });
});

albumRouter.post("/", (req: Request, res: Response) => {
    res.status(200).json({
        reponse: "Route Post ok : Création album",
    });
});

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