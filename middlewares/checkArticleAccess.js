
// Перевірка доступу до статей.

export function checkArticleAccess(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).send('Access forbidden. No permission to access articles.');
    }

    next();
}