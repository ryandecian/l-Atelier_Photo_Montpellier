import usePoolConnection from "../../database/config";
import { ResultSetHeader } from "mysql2";

async function deleteOneUserById_repository(id: number): Promise<ResultSetHeader> {
  const [deleteResult] = await usePoolConnection.query<ResultSetHeader>(
    "DELETE FROM user WHERE id = ?",
    [id]
  );

  return deleteResult;
}

export { deleteOneUserById_repository };
