import usePoolConnection from "../../database/config";
import { ResultSetHeader } from "mysql2";

async function deleteOneAlbumById_repository(id: number): Promise<ResultSetHeader> {
  const [deleteResult] = await usePoolConnection.query<ResultSetHeader>(
    "DELETE FROM album WHERE id = ?",
    [id]
  );

  return deleteResult;
}

export { deleteOneAlbumById_repository };
