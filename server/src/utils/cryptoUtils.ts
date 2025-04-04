import crypto from 'crypto';

function createCryptoUtils() {
    return crypto.randomBytes(32).toString("hex");
}

export {createCryptoUtils};