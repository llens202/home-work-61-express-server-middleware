export const getUsers =(req, res) => {
    res.send('Get users route');
};

export const createUser = (req, res) => {
    res.send('Post user route');
};

export const getUserById = (req, res) => {
    const userId = req.params.userId;
    res.send(`Get user by ID route: ${userId}`);
};

export const updateUser = (req, res) => {
    const userId = req.params.userId;
    res.send(`Put user by ID route: ${userId}`);
};

export const deleteUser = (req, res) => {
    const userId = req.params.userId;
    res.send(`Delete user by ID route: ${userId}`);
}

