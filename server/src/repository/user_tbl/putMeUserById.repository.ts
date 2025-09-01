import { ResultSetHeader } from "mysql2";
import usePoolConnection from "../../database/config";
import putMeUserById_type from "../../types/user_type/putMeUserById.type";

async function putMeUserById_repository(body: putMeUserById_type): Promise<ResultSetHeader> {
    const { firstname, lastname, email, password, address } = body;
    const id: number = body.dataUser.id;

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

export { putMeUserById_repository };
