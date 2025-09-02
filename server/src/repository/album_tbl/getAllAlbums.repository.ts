import usePoolConnection from "../../database/config";
import getAllAlbums_type from "../../types/album_type/getAllAlbums.type";

async function getAllAlbums_repository(): Promise<getAllAlbums_type[]> {
    const [results] = await usePoolConnection.query<getAllAlbums_type[]>(
        "SELECT * FROM album"
    )
    return results;
}

export { getAllAlbums_repository };
