import { ResultSetHeader } from "mysql2";
import usePoolConnection from "../../database/config";
import putOneUserById_type from "../../types/user_type/putOneUserById.type";

async function putOneUser_repository(body: putOneUserById_type): Promise<ResultSetHeader> {
    const { id, firstname, lastname, email, address } = body;

    const [updateResult] = await usePoolConnection.query<ResultSetHeader>(
        "UPDATE user SET firstname = ?, lastname = ?, email = ?, address = ? WHERE id = ?",
        [firstname, lastname, email, address, id]
    );
    
    return updateResult;
}

export { putOneUser_repository };
