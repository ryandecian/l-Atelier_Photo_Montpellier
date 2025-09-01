import usePoolConnection from "../../database/config";
import getAllUsers_type from "../../types/user_type/getAllUsers.type";

async function verifyEmailByEmail_repository(email: string): Promise<getAllUsers_type[]> {
    /* Vérification : l'email reçu existe t-il dans la DB ? */
    const [dataUser] = await usePoolConnection.query<getAllUsers_type[]>(
        "SELECT * FROM user WHERE email= ?",
        [email]
    )
    return dataUser;
}

export default verifyEmailByEmail_repository;
