import * as argon2 from "argon2";
import { Request, Response, NextFunction } from "express";

async function HashPassword( req: Request, res: Response, next: NextFunction ) {
    try {
        const hash = await argon2.hash(req.body.password);
        req.body.password = hash;
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        return;
    }
}

export default HashPassword;
