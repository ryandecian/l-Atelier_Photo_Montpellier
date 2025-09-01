import usePoolConnection from "../../database/config";
import getAllTokenResetPassword_type from "../../types/reset_password_type/getAllTokenResetPassword.type";

/* Récupération de tout les id et dates d'expiration dans la DB */
async function getAllTokenResetPassword_repository(): Promise<getAllTokenResetPassword_type[]> {
    const [results] = await usePoolConnection.query<getAllTokenResetPassword_type[]>(
        "SELECT id, user_id, token, expires_at FROM reset_password",
    )
    return results;
}

export {getAllTokenResetPassword_repository};
