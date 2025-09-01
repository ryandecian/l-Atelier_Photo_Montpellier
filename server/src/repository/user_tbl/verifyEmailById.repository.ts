import usePoolConnection from "../../database/config";
import getAllUsers_type from "../../types/user_type/getAllUsers.type";

async function verifyEmailById_repository(id: number): Promise<getAllUsers_type[]> {
    /* Vérification : l'email reçu existe t-il dans la DB ? */
    const [dataUser] = await usePoolConnection.query<getAllUsers_type[]>(
        "SELECT * FROM user WHERE id= ?",
        [id]
    )
    return dataUser;
}

export default verifyEmailById_repository;
