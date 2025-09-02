import usePoolConnection from "../../database/config";
import { ResultSetHeader } from "mysql2";
import insertOneAlbum_type from "../../types/album_type/insertOneAlbum.type";

async function insertOneAlbum_repository(body: insertOneAlbum_type): Promise<ResultSetHeader> {
    const [results] = await usePoolConnection.query<ResultSetHeader>(
        "INSERT INTO album (`date`, lien, access_code, user_id) VALUES (?, ?, ?, ?)",
        [body.date, body.lien, body.access_code, body.user_id],
    )
    return results;
}

export default insertOneAlbum_repository;
