export const getArticles = (req, res) => {
    res.send('Get articles route');
};

export const createArticle = (req, res) => {
    res.send('Post article route');
};

export const getArticleById = (req, res) => {
    const articleId = req.params.articleId;
    res.send(`Get article by id route: ${articleId}`);
};

export const updateArticle = (req, res) => {
    const articleId = req.params.articleId;
    res.send(`Put article by id route: ${articleId}`);
};

export const deleteArticle = (req, res) => {
    const articleId = req.params.articleId;
    res.send(`Delete article by id route: ${articleId}`);
};

