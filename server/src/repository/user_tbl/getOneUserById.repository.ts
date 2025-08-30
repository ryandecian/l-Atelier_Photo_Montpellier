import usePoolConnection from "../../database/config";
import getOneUserById_type from "../../types/user_type/getOneUserById.type";

async function getOneUserById_repository(id: number): Promise<getOneUserById_type | null> {
    const [results] = await usePoolConnection.query<getOneUserById_type[]>(
        "SELECT id, firstname, lastname, address, email, role FROM user WHERE id = ?",
        [id]
    )
    return results.length > 0 ? results[0] : null;
};

export { getOneUserById_repository };
