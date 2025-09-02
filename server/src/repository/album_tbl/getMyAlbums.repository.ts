import usePoolConnection from "../../database/config";
import getAllAlbums_type from "../../types/album_type/getAllAlbums.type";

async function getMyAlbums_repository(user_id: number): Promise<getAllAlbums_type[]> {
    const [results] = await usePoolConnection.query<getAllAlbums_type[]>(
        "SELECT * FROM album WHERE user_id = ?",
        [user_id]
    )
    return results;
}

export { getMyAlbums_repository };
