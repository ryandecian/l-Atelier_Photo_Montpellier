/* Import des dépendances externes : */
import usePoolConnection from "../../database/config";

/* Import des Types : */
import getVariousUsersById_type from "../../types/user_type/getVariousUsersById.type";

/* Récupérer plusieurs utilisateurs par leurs IDs */
async function getVariousUsersById_repository(ids: number[]): Promise<getVariousUsersById_type[]> {
    /* Construction des placeholders sécurisés */
    const placeholders: string = ids.map(() => "?").join(",");

    const sql: string = `
        SELECT id, firstname, lastname, email FROM user WHERE id IN (${placeholders})
    `;

    const [results] = await usePoolConnection.query<getVariousUsersById_type[]>(sql, ids);
    return results;
}

export { getVariousUsersById_repository };
