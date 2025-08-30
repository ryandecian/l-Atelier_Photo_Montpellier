import { RowDataPacket } from "mysql2";

interface getOneUserById_type extends RowDataPacket {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    role: string;
};

export default getOneUserById_type;
