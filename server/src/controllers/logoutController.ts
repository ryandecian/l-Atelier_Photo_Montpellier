import express, { Request, Response } from "express";

const logoutController = express.Router();

logoutController.post("/",
    async (req: Request, res: Response) => {
        try {
            res.clearCookie("jwtTokenServerLAPM", {
                httpOnly: true,
                // secure: true, seulement en production
                sameSite: "lax",
                path: "/",
            });
            res.status(200).json({ message: "Déconnexion avec succès" });
            return;
        }
        catch (error) {
            res.status(500).json({ message: "Échec de la déconnexion" });
            return;
        }
    });

export default logoutController;
