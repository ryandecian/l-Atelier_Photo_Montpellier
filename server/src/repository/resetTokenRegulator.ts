import usePoolConnection from "../database/config";
import { RowDataPacket } from "mysql2";

async function getTokenResetRepository() {
    const [results] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT id, expires_at FROM reset_password",
    )
    return results;
}

export {getTokenResetRepository};


function deleteTokenResetRepository(tabExpiredToken: number[]) {
    // Vérification si le tableau est vide
    if (tabExpiredToken.length === 0) {
        return tabExpiredToken;
    }

    // Stockage de la requête SQL
    const querySQL = "DELETE FROM reset_password WHERE id IN = (?)";
    
}

export {deleteTokenResetRepository};