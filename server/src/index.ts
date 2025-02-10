import express, { query, Request, Response } from "express";
import usePoolConnection from "./database/config";
import { useComplexConnection } from "./database/config";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { promises } from "dns";

const app = express();
const port = 8080;

/**
 * Pour lire le body d'un (request) contenant un json, j'ai besoin d'importer un middleware
 * d'express pour lire la request correctement.
 * Action callBack
 * Methode: USE
 */
app.use(express.json());

/**
 * Route de base
 * Path: /
 * Action callBack
 * Methode: GET
 */
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("API de Anne SAUNIER !!!");
})

/**
 * Route de base
 * Path: /
 * Action callBack
 * Methode: POST
 */
app.post("/", (req: Request, res: Response) => {
    res.status(502).json({ reponse: "Requête invalide !", data: req.body })
})

/**
 * Route de register
 * Path: /register
 * Action callBack
 * Methode: POST
 */
app.post("/register", async (req: Request, res: Response): Promise<void> => {
    let connection;
    try {
        // ✅ Vérification 1 : Toutes les Keys sont présentes ?
        const registerKeys = ["firstname", "lastname", "email", "password"];
        const controlKeys = registerKeys.filter(keys => !req.body[keys]);

        // ✅ Si il manque une seul Keys ou que le champs d'une Keys obligatoire est vide ou null, renvois une erreur
        if (controlKeys.length > 0) {
            res.status(400).json({ reponse: "La syntaxe de la requête est erronée." });
            return;
        }

        // ✅ Si les conditions précédantes sont ok, lance une connection a la DB
        connection = await useComplexConnection();

        // ✅ Vérification 2 : l'email reçu existe t-il dans la DB ?
        const [dataUser] = await connection.query<RowDataPacket[]>(
            "SELECT * FROM user WHERE email= ?",
            [req.body.email]
        );

        // ✅ Si l'email existe sa dégage, on arrête l'exécution
        if (dataUser.length > 0) {
            res.status(409).json({ reponse: "Cet email est déjà utilisé. Veuillez en choisir un autre.", server: dataUser });
            return;
        }

        // ✅ Si les conditions précédantes sont ok, envois les infos a la DB pour écriture
        const [results] = await connection.query<ResultSetHeader>(
            "INSERT INTO user (firstname, lastname, address, email, password) VALUES (?, ?, ?, ?, ?)",
            [req.body.firstname, req.body.lastname, req.body.address, req.body.email, req.body.password],
        );

        // ✅ Vérification 3 : Si la DB ne rejete pas les données
        if (results.affectedRows === 0) {
            res.status(400).json({ reponse: "La requête a été rejeté par la base de donnée"});
            return;
        }

        // ✅ Réponse de succès
        res.status(201).json({ reponse: "Enregistrement accepté", data: results});
    }
    catch (error) {
        console.error ("Erreur lors de la requête SQL :", error);
        res.status(500).json({ error: "Erreur lors de l'accès à la base de données." });
        return;
    }
    finally {
        if (connection) connection.release();
    }
})

/**
 * Route de login
 * Path: /login
 * Action callBack
 * Methode: POST
 */
interface UserType {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    email: string
    password: string;
    date_save: string;
}

app.post("/login", async (req: Request, res: Response):Promise<void> => {
    try {
        const connection = await usePoolConnection;
        const [results] = await connection.query<UserType[] & RowDataPacket[]>(
            "SELECT * FROM user WHERE email= ?", 
            [req.body.email]
        );

        if (results.length === 0) {
            res.status(404).json({ reponse: "Email n'existe pas dans la DB" });
            return;
        }
        else {
            if (results[0].password === req.body.password) {
                res.status(200).json({ response: "Il existe !!", data: results, envois: req.body });
                return;
            } else {
                res.status(401).json({ reponse: "Mot de passe incorrect" });
                return;
            }
        }
    } 
    catch (error) {
        console.error("Erreur lors de la requête SQL :", error);
        res.status(500).json({ error: "Erreur lors de l'accès à la base de données." });
        return;
    }
});



/**
 * Le server se lance sur le port 8080
 */
app.listen(port, () => {
    console.log(`Server lancé sur http://localhost:${port}`);
});

