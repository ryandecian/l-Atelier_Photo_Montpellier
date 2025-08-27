import { ResultSetHeader } from "mysql2";
import usePoolConnection from "../database/config";
import dataOneUserPutType from "../types/dataOneUserPut.type";

async function putOneUserRepository(body: dataOneUserPutType): Promise<ResultSetHeader> {
    const { id, firstname, lastname, email, address } = body;

    const [updateResult] = await usePoolConnection.query<ResultSetHeader>(
        "UPDATE user SET firstname = ?, lastname = ?, email = ?, address = ? WHERE id = ?",
        [firstname, lastname, email, address, id]
    );
    
    return updateResult;
}

export { putOneUserRepository };
