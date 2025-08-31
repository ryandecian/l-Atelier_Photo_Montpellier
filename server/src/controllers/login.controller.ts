/* Import des dépendances externes : */
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";

/* Import des Repositories : */
import verifyEmail_repository from "../repository/user_tbl/verifyEmail.repository";

/* Import des Types : */
import getAllUsers_type from "../types/user_type/getAllUsers.type";

/* Import des utils */
import { verifyPasswordArgon_utils } from "../utils/hashArgon.utils";
import { createJwtTokenServerLAPM_utils, createJwtTokenClientLAPM_utils } from "../utils/jwtTokenLAPM.utils";

/* Login : Connexion de l'utilisateur */
/* URI : /login */
const login_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Vérification si l'email existe */
        const dataUser: getAllUsers_type[] = await verifyEmail_repository(req.body.email);

        if (dataUser.length === 0) {
            res.status(404).json({ error: "Email ou mot de passe incorrect" });
            return;
        }

        /* Logique métier 2 : Vérifier le mot de passe utilisateur */
        const verifyPassword: boolean = await verifyPasswordArgon_utils(dataUser[0].password, req.body.password);

        if (!verifyPassword) { // Si c'est false, c'est que le mot de passe est incorrect
            res.status(401).json({ error: "Email ou mot de passe incorrect" });
            return;
        }

        /* Logique métier 3 : Création du JWT client et server */
        // Création du token server
        const jwtTokenServerLAPM: string | boolean = await createJwtTokenServerLAPM_utils(dataUser[0]);
        // Création du token client
        const jwtTokenClientLAPM: string | boolean = await createJwtTokenClientLAPM_utils(dataUser[0]);

        // Vérification des tokens Server et Client si elles existent
        // Si l'une d'entre elles n'existe pas, on renvoie une erreur 500
        if (!jwtTokenServerLAPM || !jwtTokenClientLAPM) {
            res.status(500).json({ message: "Erreur interne serveur." });
            return;
        }

        /* Logique métier 4 : Réponse au client */
        res.status(200)
            .cookie("jwtTokenServerLAPM", jwtTokenServerLAPM, {
                httpOnly: true,
                // secure: true, seulement en production
                sameSite: "lax",
                maxAge: 60 * 60 * 1000, // 1 heure
            })
            .json({
                message: "Connexion réussie",
                jwtTokenClientLAPM: jwtTokenClientLAPM,
            });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        return;
    }
};


export default login_controller;
