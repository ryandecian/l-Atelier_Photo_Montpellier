import crypto from 'crypto';

async function createCryptoToken_utils(): Promise<string> {
    return crypto.randomBytes(32).toString("hex");
}

export {createCryptoToken_utils};