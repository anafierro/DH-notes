function userExistsMiddleware (req, res, next) {
    res.locals.exists = false;

    if (req.session.userLogged) {
        res.locals.exists = true;
        res.locals.userLogged = req.session.userLogged; //para pasar una variable local a la vista 
    }

    next();
}

module.exports = userExistsMiddleware;