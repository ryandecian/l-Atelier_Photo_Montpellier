import { NoSubstitutionTemplateLiteral } from "typescript";
import usePoolConnection from "../database/config";
import { RowDataPacket } from "mysql2";

async function getOneUserByIdRepository(id: NoSubstitutionTemplateLiteral) {
    const [results] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT * FROM users WHERE id = ?",
        [id]
    )
    return results;
};

export { getOneUserByIdRepository };