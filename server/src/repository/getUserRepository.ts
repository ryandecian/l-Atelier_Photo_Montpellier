import usePoolConnection from "../database/config";
import { FieldPacket, RowDataPacket } from "mysql2";

async function getOneUserByIdRepository(id: number): Promise<RowDataPacket[]> {
    const [results]: [RowDataPacket[], FieldPacket[]] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT id, firstname, lastname, address, email, role FROM user WHERE id = ?",
        [id]
    )
    return results;
};

export { getOneUserByIdRepository };


async function getAllUsersRepository(): Promise<RowDataPacket[]> {
    const [results]: [RowDataPacket[], FieldPacket[]] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT * FROM user"
    )
    return results;
}

export { getAllUsersRepository };