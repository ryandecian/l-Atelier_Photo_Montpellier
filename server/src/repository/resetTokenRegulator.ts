import usePoolConnection from "../database/config";
import { RowDataPacket, ResultSetHeader, FieldPacket } from "mysql2";

async function getTokenResetRepository(): Promise<RowDataPacket[]> {
    const [results]: [RowDataPacket[], FieldPacket[]] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT id, expires_at FROM reset_password",
    )
    return results;
}

export {getTokenResetRepository};


async function deleteTokenResetRepository(tabExpiredToken: number[]): Promise<number | undefined> {
    // Vérification si le tableau est vide
    if (tabExpiredToken.length === 0) {
        return;
    }

    // Stockage de la requête SQL
    const querySQL: string = "DELETE FROM reset_password WHERE id IN (?)";
    // Exécution de la requête SQL
    const [results]: [ResultSetHeader, FieldPacket[]] = await usePoolConnection.query<ResultSetHeader>(querySQL, [tabExpiredToken]);
    return results.affectedRows
}

export {deleteTokenResetRepository};

async function getOneTokenResetRepository(token: string): Promise<RowDataPacket[]> {
    const [results]: [RowDataPacket[], FieldPacket[]] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT * FROM reset_password WHERE token = ?", [token]
    )
    return results;
}

export {getOneTokenResetRepository};
