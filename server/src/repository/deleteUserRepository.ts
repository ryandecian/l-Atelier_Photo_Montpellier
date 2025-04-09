import usePoolConnection from "../database/config";
import { ResultSetHeader } from "mysql2";

async function deleteUserRepository(id: number): Promise<ResultSetHeader> {
  const [deleteResult] = await usePoolConnection.query<ResultSetHeader>(
    "DELETE FROM user WHERE id = ?",
    [id]
  );

  return deleteResult;
}

export { deleteUserRepository };
