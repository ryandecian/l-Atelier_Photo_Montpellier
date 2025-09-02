/* Import des dépendances externes : */
import { RowDataPacket } from "mysql2";

/* Type de retour pour la récupération de plusieurs utilisateurs (dédier au controller getAllUsers.controller.ts) */
interface getVariousUsersById_type extends RowDataPacket {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
}

export default getVariousUsersById_type;
