function createExpireDateUtils() {
    return new Date(Date.now() + 3600000); // Expiration dans 1h
}

export {createExpireDateUtils};
