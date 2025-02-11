import * as argon2 from "argon2";
import { error } from "console";
import { Request, Response, NextFunction } from "express";

async function HashPassword( req: Request, res: Response, next: NextFunction) {
    try {}
    catch (error) {
        console.error("Erreur interne dans le serveur :", error);
        res.status(500).json({ error: "Erreur interne serveur." });
        return;
    }
}

export default HashPassword;