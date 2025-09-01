import usePoolConnection from "../database/config";
import { RowDataPacket, ResultSetHeader, FieldPacket } from "mysql2";



// Récupération d'un token cible dans la DB
async function getOneTokenResetRepository(token: string): Promise<RowDataPacket[]> {
    const [results]: [RowDataPacket[], FieldPacket[]] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT * FROM reset_password WHERE token = ?", [token]
    )
    return results;
}

export {getOneTokenResetRepository};


// Suppression d'un token ciblé dans la DB
async function deletOneTokenResetRepository(token: string): Promise<number> {
    const [results]: [ResultSetHeader, FieldPacket[]] = await usePoolConnection.query<ResultSetHeader>(
        "DELETE FROM reset_password WHERE token = ?", [token]
    )
    return results.affectedRows;
}

export {deletOneTokenResetRepository};
