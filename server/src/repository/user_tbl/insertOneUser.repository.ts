import usePoolConnection from "../../database/config";
import { ResultSetHeader } from "mysql2";
import insertOneUser_type from "../../types/user_type/insertOneUser.type";
import optionalChampsSQL_utils from "../../utils/optionalChampSQL.utils";

async function insertOneUser_repository(body: insertOneUser_type): Promise<ResultSetHeader> {
    /* Utils de vérification du champs optionnel. */
    /* Si adress est absent, null, chaine vide ou undefined, retourne null */
    const adress = optionalChampsSQL_utils(body.adress)

    const [results] = await usePoolConnection.query<ResultSetHeader>(
        "INSERT INTO user (firstname, lastname, address, email, password) VALUES (?, ?, ?, ?, ?)",
        [body.firstname, body.lastname, adress, body.email, body.password],
    )
    return results;
}

export default insertOneUser_repository;
