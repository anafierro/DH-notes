const mainController = {
    index(req, res) {
        res.render('index')
    },
    js(req, res) {
        res.render('js')
    },
    css(req, res) {
        res.render('css')
    },
    html(req, res) {
        res.render('html')
    },
    admin(req, res) {
        const username = req.query.user;
        res.render('admin', { username:username });
    }
};

module.exports = mainController;