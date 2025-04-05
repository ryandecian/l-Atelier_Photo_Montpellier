import { promises } from "dns";
import usePoolConnection from "../database/config";
import { RowDataPacket } from "mysql2";
import { ResultSetHeader } from "mysql2";

async function getTokenResetRepository() {
    const [results] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT id, expires_at FROM reset_password",
    )
    return results;
}

export {getTokenResetRepository};


async function deleteTokenResetRepository(tabExpiredToken: number[]) {
    // Vérification si le tableau est vide
    if (tabExpiredToken.length === 0) {
        return;
    }

    // Stockage de la requête SQL
    const querySQL = "DELETE FROM reset_password WHERE id IN (?)";
    // Exécution de la requête SQL
    const [results] = await usePoolConnection.query<ResultSetHeader>(querySQL, [tabExpiredToken]);
    return results.affectedRows
}

export {deleteTokenResetRepository};
