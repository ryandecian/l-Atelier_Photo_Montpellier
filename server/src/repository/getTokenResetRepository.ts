import usePoolConnection from "../database/config";
import { RowDataPacket } from "mysql2";

async function getTokenResetRepository() {
    const [results] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT * FROM resert_password",
    )
    return results;
}

export default getTokenResetRepository;