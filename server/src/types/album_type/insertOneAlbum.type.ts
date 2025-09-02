import { RowDataPacket } from "mysql2";

interface insertOneAlbum_type extends RowDataPacket {
    date: string;
    lien: string;
    access_code: string;
    user_id: number;
};

export default insertOneAlbum_type;
