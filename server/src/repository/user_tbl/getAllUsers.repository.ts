import usePoolConnection from "../../database/config";
import getAllUsers_type from "../../types/user_type/getAllUsers.type";

async function getAllUsers_repository(): Promise<getAllUsers_type[]> {
    const [results] = await usePoolConnection.query<getAllUsers_type[]>(
        "SELECT * FROM user"
    )
    return results;
}

export { getAllUsers_repository };
