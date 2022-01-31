const path = require('path');

const mainController = {
    home: (req, res) => {
        res.sendFile(path.resolve('./views/home.html'))
    },
    about: (req, res) => {
        res.sendFile(path.resolve('./views/about.html'));
    } 
};

module.exports = mainController;