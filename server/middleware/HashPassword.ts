import * as argon2 from "argon2";
import { error } from "console";
import { Request, Response, NextFunction } from "express";

async function HahPassword( req: Request, res: Response, next: NextFunction) {
    try {}
    catch (error) {
        console.error ("Erreur lors de la requête SQL :", error);
        res.status(500).json({ error: "Erreur lors de l'accès à la base de données." });
        return;
    }
}