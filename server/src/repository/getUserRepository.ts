import { NoSubstitutionTemplateLiteral } from "typescript";
import usePoolConnection from "../database/config";
import { FieldPacket, RowDataPacket } from "mysql2";

async function getOneUserByIdRepository(id: number): Promise<RowDataPacket[]> {
    const [results]: [RowDataPacket[], FieldPacket[]] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT * FROM users WHERE id = ?",
        [id]
    )
    return results;
};

export { getOneUserByIdRepository };