const usersAllowed = ['Ada', 'Greta', 'Vim', 'Tim']

const authorizedMiddleware = (req, res, next) => {
    const username = req.query.user;
    if(usersAllowed.includes(username)) {
        next();
    } else {
        next(new Error('No tienes permiso'));
    }
};

module.exports = authorizedMiddleware;