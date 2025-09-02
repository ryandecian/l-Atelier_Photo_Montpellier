import { RowDataPacket } from "mysql2";

interface getAllAlbums_type extends RowDataPacket {
    id: number;
    date: string;
    lien: string;
    access_code: string;
    user_id: number;
};

export default getAllAlbums_type;
