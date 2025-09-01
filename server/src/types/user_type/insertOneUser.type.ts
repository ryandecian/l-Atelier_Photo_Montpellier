import { RowDataPacket } from "mysql2";

interface insertOneUser_type extends RowDataPacket {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    address?: string;
    role: string;
    date_save: string;
};

export default insertOneUser_type;
