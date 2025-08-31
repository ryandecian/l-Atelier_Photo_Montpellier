/* Import des dépendances externes : */
import { Request } from "express";
import { ENV } from "../config/ENV.config";
import jwt from "jsonwebtoken";

/* Import des Types : */
import getAllUsers_type from "../types/user_type/getAllUsers.type";
import payloadJwtTokenServerLAPM_type from "../types/payload_JWT_type/payloadJwtTokenServerLAPM.type";
import payloadJwtTokenClientLAPM_type from "../types/payload_JWT_type/payloadJwtTokenClientLAPM.type";

/* Import des utils : */
import { createDate_Number_utils } from "./createDate.utils";


/* Récupération de la clé secrète Server */
const SECRET_KEY_TOKEN_SERVER: string | undefined = ENV.SECRET_KEY_TOKEN_API_SERVER;
/* Récupération de la clé secrète Client */
const SECRET_KEY_TOKEN_CLIENT: string | undefined = ENV.SECRET_KEY_TOKEN_CLIENT;

async function createJwtTokenServerLAPM_utils(dataUser: getAllUsers_type): Promise<string | boolean> {
    if (!SECRET_KEY_TOKEN_SERVER) {
        return false
    }

    /* Création des variables token */
    const expiresIn: number = 60 * 60; /* 1 heure */
    const dateNow: number = await createDate_Number_utils(); /* Date actuelle en timestamp UNIX */

    const payload_server: payloadJwtTokenServerLAPM_type = {
        id: dataUser.id,
        email: dataUser.email,
        role: dataUser.role,
        iat: dateNow, /* ⏳ Date de création du token */
    }

    /* Création du token server */
    const jwtTokenServerLAPM = jwt.sign(payload_server, SECRET_KEY_TOKEN_SERVER, { expiresIn })

    return ( jwtTokenServerLAPM );
}

export { createJwtTokenServerLAPM_utils };


async function createJwtTokenClientLAPM_utils(dataUser: getAllUsers_type): Promise<string | boolean> {
    if (!SECRET_KEY_TOKEN_CLIENT) {
        return false
    }

    /* Création des variables token */
    const expiresIn: number = 60 * 60; /* 1 heure */
    const dateNow: number = await createDate_Number_utils(); /* Date actuelle en timestamp UNIX */

    const payload_client: payloadJwtTokenClientLAPM_type = {
        id: dataUser.id,
        email: dataUser.email,
        firstname: dataUser.firstname,
        lastname: dataUser.lastname,
        address: dataUser.address,
        role: dataUser.role,
        iat: dateNow, /* ⏳ Date de création du token */
    }

    /* Création du token client */
    const jwtTokenClientLAPM = jwt.sign(payload_client, SECRET_KEY_TOKEN_CLIENT, { expiresIn })

    return jwtTokenClientLAPM;
}

export { createJwtTokenClientLAPM_utils };


async function verifyJwtTokenLAPM_utils(req: Request): Promise<payloadJwtTokenServerLAPM_type | boolean> {
    try {
        if (!SECRET_KEY_TOKEN_SERVER) {
            return false
        }
    
        // Vérification du token
        const token = req.cookies?.jwtTokenServerLAPM;
        if (!token) return false;

        const payload = jwt.verify(token, SECRET_KEY_TOKEN_SERVER) as payloadJwtTokenServerLAPM_type;

        return ( payload );
    }
    catch (error) {
        return false;
    }
}

export { verifyJwtTokenLAPM_utils };
