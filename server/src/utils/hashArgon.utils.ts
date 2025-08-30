import * as argon2 from 'argon2';

async function hashPasswordArgon_utils (passwordUser: string): Promise<string> {
    const hash: string = await argon2.hash(passwordUser);
    return hash;
}

export {hashPasswordArgon_utils};


async function verifyPasswordArgon_utils(passwordDB: string, passwordUser: string): Promise<boolean> {
    const verifyPassword: boolean = await argon2.verify(passwordDB, passwordUser);
    return verifyPassword;
}

export {verifyPasswordArgon_utils};
