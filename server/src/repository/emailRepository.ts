import usePoolConnection from "../database/config";
import { RowDataPacket } from "mysql2";

async function verifyEmailTrueRepository(email: string) {
    // ✅ Vérification : l'email reçu existe t-il dans la DB ?
    const [dataUser] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT * FROM user WHERE email= ?",
        [email]
    )
    return dataUser;
}

export {verifyEmailTrueRepository};