/* Import des dépendances externes : */
import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

/* Import des Repositories : */
import verifyEmail_repository from "../../repository/user_tbl/verifyEmail.repository";
import { putMeUserById_repository } from "../../repository/user_tbl/putMeUserById.repository";
import { getOneUserById_repository } from "../../repository/user_tbl/getOneUserById.repository";

/* Import des Types : */
import getAllUsers_type from "../../types/user_type/getAllUsers.type";
import getOneUserById_type from "../../types/user_type/getOneUserById.type";

/* Import des utils : */
import { hashPasswordArgon_utils } from "../../utils/hashArgon.utils";
import { createJwtTokenServerLAPM_utils, createJwtTokenClientLAPM_utils } from "../../utils/jwtTokenLAPM.utils";


/* Modification de ses propre données utilisateurs */
/* URI : /user/me */
const putMeUser_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Vérifier que l'email demandé en modification n'existe pas en DB */
        /* Vérification que l'email du formulaire est différent de celui du token */
        /* Si l'email est différent alors l'utilisateur veux volontairement modifier son email */
        if (req.body.email !== req.body.dataUser.email) {
            const dataUserDB: getAllUsers_type[] = await verifyEmail_repository(req.body.email);

            // Si l'email existe déjà dans la DB, on ne peut pas continuer.
            if (dataUserDB.length > 0) { /* Si c'est supérieur à 0 et que l'email est différent c'est que l'email existe déjà */
                res.status(409).json({ error: "Cet email est déjà utilisé. Veuillez en choisir un autre." });
                return;
            }
        }
        console.info("Logique metier 1")

        /* Logique métier 2 : Vérifier s'il y a une demande de modification de mot de passe */
        /* Si password est vide ou seulement des espaces, on l’enlève */
        if (typeof req.body.password === "string" && req.body.password.trim() === "") {
            delete req.body.password;
        }

        /* Si un mot de passe est fourni on le hache et le met à jour */
        if (req.body.password) {
            // Si un mot de passe est fourni, le hacher
            const hashedPassword = await hashPasswordArgon_utils(req.body.password);
            req.body.password = hashedPassword;
        }
        console.info("Logique metier 2")

        /* Logique métier 3 : Modifier l'utilisateur connecté */
        const putDataUser: ResultSetHeader = await putMeUserById_repository(req.body);

        if (putDataUser.affectedRows === 0) {
            res.status(404).json({ error: "Aucun utilisateur trouvé" });
            return;
        }
        console.info("Logique metier 3")

        /* Logique métier 4 : Recuperer l'utilisateur connecté */
        const dataUser: getOneUserById_type | null = await getOneUserById_repository(req.body.dataUser.id);
        if (!dataUser) {
            res.status(404).json({ error: "Aucun utilisateur trouvé" });
            return;
        }
        console.info("Logique metier 4", "datauser :", dataUser);

        /* Logique métier 5 : Réédition des token de l'utilisateur */
        // Création du token server
        const jwtTokenServerLAPM: string | boolean = await createJwtTokenServerLAPM_utils(dataUser);
        // Création du token client
        const jwtTokenClientLAPM: string | boolean = await createJwtTokenClientLAPM_utils(dataUser);

        // Vérification des clés secrète Server et Client si elles existent
        // Si l'une d'entre elles n'existe pas, on renvoie une erreur 500
        if (!jwtTokenServerLAPM || !jwtTokenClientLAPM) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error("Erreur dans la création des tokens");
            return;
        }
        console.info("Logique metier 5")

        /* Logique métier 6 : Envois des données de l'utilisateur */
        res.status(200)
            .cookie("jwtTokenServerLAPM", jwtTokenServerLAPM, {
                httpOnly: true,
                // secure: true, seulement en production
                sameSite: "lax",
                maxAge: 60 * 60 * 1000, // 1 heure
            })
            .json({
                message: "Modification réussie",
                jwtTokenClientLAPM: jwtTokenClientLAPM,
            });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur inconnue." });
        console.error("Erreur interne serveur dans le controller putMeUser : ", error);
        return;
    }
};

export default putMeUser_controller;
