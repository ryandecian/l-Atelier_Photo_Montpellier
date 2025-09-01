import { RowDataPacket } from "mysql2";

interface getAllTokenResetPassword_type extends RowDataPacket {
    id: number;
    user_id: number;
    token: string;
    expires_at: string;
};

export default getAllTokenResetPassword_type;
