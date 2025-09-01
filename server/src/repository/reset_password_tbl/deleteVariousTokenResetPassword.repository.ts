import usePoolConnection from "../../database/config";
import { ResultSetHeader, FieldPacket } from "mysql2";

/* Suppression d'un ou plusieurs tokens ciblés par un id dans la DB */
async function deleteVariousTokenReset_repository(tabExpiredToken: number[]): Promise<number | undefined> {
    /* Vérification si le tableau est vide */
    if (tabExpiredToken.length === 0) {
        return;
    }

    /* Stockage de la requête SQL */
    const querySQL: string = "DELETE FROM reset_password WHERE id IN (?)";
    /* Exécution de la requête SQL */
    const [results]: [ResultSetHeader, FieldPacket[]] = await usePoolConnection.query<ResultSetHeader>(querySQL, [tabExpiredToken]);
    return results.affectedRows;
}

export {deleteVariousTokenReset_repository};
