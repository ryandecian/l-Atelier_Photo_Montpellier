import usePoolConnection from "../../database/config";
import { FieldPacket } from "mysql2";
import getAllTokenResetPassword_type from "../../types/reset_password_type/getAllTokenResetPassword.type";

/* Récupération d'un token cible dans la DB */
async function getOneTokenReset_repository(token: string): Promise<getAllTokenResetPassword_type[]> {
    const [results]: [getAllTokenResetPassword_type[], FieldPacket[]] = await usePoolConnection.query<getAllTokenResetPassword_type[]>(
        "SELECT * FROM reset_password WHERE token = ?", [token]
    )
    return results;
}

export {getOneTokenReset_repository};