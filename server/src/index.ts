import express, { Request, Response } from "express";
import { useConnection } from "./database/config";
import { RowDataPacket } from "mysql2";
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
    res.status(502).json({ Reponse: "Requête invalide !", data: req.body })
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
    adress: string;
    email: string
    password: string;
    date_save: string;
}

// app.post("/login", async(req: Request, res: Response) => {
//     try {
//         const connection = await useConnection;
//         const [results] = await connection.query<UserType[] & RowDataPacket[]>
//         // ? est remplacé par [req.body.email] ce qui protège des injections SQL
//         ("SELECT * FROM user WHERE email= ?", [req.body.email]);
//         if (results.length !== 0) {
//             res.status(200).json({ Reponse: "Il existe !", data: results})
//         }
//         else {
//         res.status(404).json({ response: "il n'existe pas" })}
//     }
    
//     catch (error) {
//         console.error("Erreur lors de la requête SQL :", error)
//         res.status(500).json({ error: "Erreur lors de l'accès à la base de données." })
//         throw error;
//     }
// })

app.post("/login", async (req: Request, res: Response):Promise<void> => {
    try {
        const connection = await useConnection;
        const [results] = await connection.query<UserType[] & RowDataPacket[]>(
            "SELECT * FROM user WHERE email= ?", 
            [req.body.email]
        );

        if (results.length === 0) {
            res.status(404).json({ Reponse: "Email n'existe pas dans la DB" });
            return;
        } else {
            if (results[0].email === req.body.email && results[0].password === req.body.password) {
                res.status(200).json({ response: "Il existe !!", data: results, envois: req.body });
                return;
            } else {
                res.status(401).json({ Reponse: "Mot de passe incorrect" });
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

