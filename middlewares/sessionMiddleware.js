import session from 'express-session';

export const sessionMiddleware = session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false
});