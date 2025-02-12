import { Request, Response, NextFunction } from "express";

function VerifyKeys(requiredKeys: string[]) {
    return (
        function ControleKeys( req: Request, res: Response, next: NextFunction) {
            const missingKeys = requiredKeys.filter(key => !req.body[key]);

            if (missingKeys.length > 0) {
                console.error("❌ Erreur : Clés manquantes dans la requête", {
                    missingKeys, 
                    body: req.body, 
                    middleware: "VerifyKeys.ts",
                    chemin: "/server/src/middleware/VerifyKeys.ts"})
                res.status(400).json({ reponse: "La syntaxe de la requête est erronée." })
            }

            next()
        }
    )
}

export default VerifyKeys;