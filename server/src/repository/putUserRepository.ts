import { ResultSetHeader, RowDataPacket } from "mysql2";
import usePoolConnection from "../database/config";
import dataUserType from "../types/dataUserType";

async function putUserMeRepository(dataUser: dataUserType): Promise<ResultSetHeader> {
    const { firstname, lastname, email, password, address, id } = dataUser;

    const setClauses: string[] = [
        "firstname = ?",
        "lastname = ?",
        "email = ?",
        "address = ?"
    ];
    const params: Array<string | number | undefined> = [firstname, lastname, email, address];

    // Ajout conditionnel du mot de passe (déjà hashé)
    if (typeof password === "string" && password.trim().length > 0) {
        setClauses.push("password = ?");
        params.push(password);
    }

    // id toujours en dernier
    params.push(id);

    const sql = `UPDATE user SET ${setClauses.join(", ")} WHERE id = ?`;

    const [updateResult] = await usePoolConnection.query<ResultSetHeader>(sql, params);
    return updateResult;
}

export { putUserMeRepository };
