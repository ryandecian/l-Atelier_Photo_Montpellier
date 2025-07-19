import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';
import usePoolConnection from '../../database/config';
import { ResultSetHeader } from 'mysql2';

async function Create_Crypto_Middleware(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.body.dataUser?.id;
        if (!userId) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error(
                {
                    identity: "Create_Crypto_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/Crypto_Middleware/Create_Crypto_Middleware.ts",
                    "❌ Nature de l'erreur": "Le middleware VerifyEmailTrue.ts n'a pas mis a disposition dataUser.",
                    cause1: "Le middleware VerifyEmailTrue.ts n'a pas été exécuté",
                    cause2: "L'id de l'utilisateur n'est pas présent et n'a pas été récupéré dans la DB.",
                },
            );
            return;
        }

        // Générer un token sécurisé
        const token = crypto.randomBytes(32).toString("hex");
        const expiresAt = new Date(Date.now() + 3600000); // Expiration dans 1h

        const [results] = await usePoolConnection.query<ResultSetHeader>(
            "INSERT INTO reset_password (user_id, token, expires_at) VALUES (?, ?, ?)",
            [userId, token, expiresAt]
        );
        if (results.affectedRows === 0) {
            res.status(400).json({ reponse: "La requête a été rejeté par la base de donnée"});
            console.error(
                {
                    identity: "Create_Crypto_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/Crypto_Middleware/Create_Crypto_Middleware.ts",
                    "❌ Nature de l'erreur": "Rejet des infos à enregistrer par la DB SQL",
                    analyse: "A ce stade, les Keys obligatoire demandé par la table son ok",
                    cause1 : "Les paramètres de la table ont changé",
                    cause2: "Le middleware VerifyKeys.ts à été modifié ou mal paramétré",
                },
            );
            return;
        };

        // Lien de réinitialisation
        const resetLink = `${process.env.VITE_DOMAIN_CLIENT}/reset-password?token=${token}`;

        // Préparation des données pour l'envoi par email
        // Stocker la réponse de la DB pour l'envoyer par email
        req.body.to = req.body.email;
        req.body.subject = "Réinitialisation de votre mot de passe";
        req.body.html = `<p>Bonjour,</p>
                   <p>Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
                   <a href="${resetLink}">${resetLink}</a>
                   <p>Ce lien expirera dans 1 heure.</p>`,

        next();
    }
    catch (error) {
        console.error({
            identity: "Create_Crypto_Middleware.ts",
            type: "middleware",
            chemin: "/server/src/middleware/Crypto_Middleware/Create_Crypto_Middleware.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        res.status(500).json({ error: "Erreur interne server." });
    }
}

export default Create_Crypto_Middleware;
