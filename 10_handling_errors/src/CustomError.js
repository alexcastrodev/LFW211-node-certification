class HttpNotAuthorizedError extends Error {
    constructor() {
        const message ='HttpError'
        super(message);
        this.name = 'HttpNotAuthorizedError';
        this.status = 401;
    }
}

module.exports = HttpNotAuthorizedError;