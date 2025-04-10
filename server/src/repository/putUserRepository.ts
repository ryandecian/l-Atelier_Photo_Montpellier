import { ResultSetHeader, RowDataPacket } from "mysql2";
import usePoolConnection from "../database/config";
import dataUserType from "../types/dataUserType";

async function putUserMeRepository(dataUser: dataUserType): Promise<ResultSetHeader> {
  const { firstname, lastname, email, address, id } = dataUser;

  const [updateResult] = await usePoolConnection.query<ResultSetHeader>(
    "UPDATE user SET firstname = ?, lastname = ?, email = ?, address = ? WHERE id = ?",
    [firstname, lastname, email, address, id]
  );

  return updateResult
}

export { putUserMeRepository };
