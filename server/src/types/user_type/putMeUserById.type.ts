type putMeUserById_type = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    address: string;
    dataUser: {
        id: number;
        email: string;
        role: string;
    };
}

export default putMeUserById_type;
