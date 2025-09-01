import usePoolConnection from "../../database/config";
import { FieldPacket, ResultSetHeader } from "mysql2";

async function putOneUserPasswordById_repository(id: number, password: string): Promise<ResultSetHeader> {
    const [results]: [ResultSetHeader, FieldPacket[]] = await usePoolConnection.query<ResultSetHeader>(
        "UPDATE user SET password = ? WHERE id = ?",
        [password, id],
    )
    return results
}

export { putOneUserPasswordById_repository };
