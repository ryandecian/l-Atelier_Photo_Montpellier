import usePoolConnection from "../../database/config";
import { FieldPacket, ResultSetHeader } from "mysql2";
import getAllAlbums_type from "../../types/album_type/getAllAlbums.type";

async function putOneAlbumById_repository(albumData: getAllAlbums_type): Promise<ResultSetHeader> {
    const [results]: [ResultSetHeader, FieldPacket[]] = await usePoolConnection.query<ResultSetHeader>(
        "UPDATE album SET `date` = ?, lien = ?, access_code = ?, user_id = ? WHERE id = ?",
        [albumData.date, albumData.lien, albumData.access_code, albumData.user_id, albumData.id],
    )
    return results
}

export { putOneAlbumById_repository };
