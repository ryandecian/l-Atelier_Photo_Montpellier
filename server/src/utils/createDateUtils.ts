async function createExpireDateUtils(): Promise<Date> {
    return new Date(Date.now() + 3600000); // Expiration dans 1h
}

export {createExpireDateUtils};
