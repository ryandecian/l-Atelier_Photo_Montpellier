type DataUser_Type = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    address?: string | null;
    role: string;
    date_save?: string;
    iat?: number; // Date de création du token
    exp: number; // Date d'expiration du token
}

export type { DataUser_Type };
