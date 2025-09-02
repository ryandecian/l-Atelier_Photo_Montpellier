import usePoolConnection from "../../database/config";
import getAllAlbums_type from "../../types/album_type/getAllAlbums.type";

async function getOneAlbum_repository(album_id: number): Promise<getAllAlbums_type | null> {
    const [results] = await usePoolConnection.query<getAllAlbums_type[]>(
        "SELECT * FROM album WHERE id = ?",
        [album_id]
    )
    return results[0] || null;
}

export { getOneAlbum_repository };
