type dataUserPutType = {
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

export default dataUserPutType;
