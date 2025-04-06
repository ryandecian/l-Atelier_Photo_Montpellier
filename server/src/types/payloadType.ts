type payloadType = {
    id: number;
    email: string;
    firstname?: string;
    lastname?: string;
    address?: string;
    role: string;
    iat: number; // Date de création du token
}

export default payloadType;
