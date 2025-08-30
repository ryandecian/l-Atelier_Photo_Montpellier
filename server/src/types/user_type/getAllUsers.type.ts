import { RowDataPacket } from "mysql2";

interface getAllUsers_type extends RowDataPacket {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    address: string;
    role: string;
    date_save: Date;
};

export default getAllUsers_type;
