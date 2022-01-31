const db = require("../database/models");

const genresController = {
    list: function(req, res) {
        db.Genres.findAll()
        .then(function(genres) {
            res.render('genresList', {genres : genres})
        })
    },
    detail: function(req, res) {
        db.Genres.findByPk(req.params.id)
        .then(function(genre) {
            res.render('genresDetail', {genre : genre})
        })
    }
};

module.exports = genresController;