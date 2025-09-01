import usePoolConnection from "../../database/config";
import { ResultSetHeader, FieldPacket } from "mysql2";

/* Suppression d'un unique token de réinitialisation ciblé */
async function deleteOneTokenResetPassword_repository(token: string): Promise<number> {
    const [results]: [ResultSetHeader, FieldPacket[]] = await usePoolConnection.query<ResultSetHeader>(
        "DELETE FROM reset_password WHERE token = ?", [token]
    )
    return results.affectedRows;
}

export { deleteOneTokenResetPassword_repository };
