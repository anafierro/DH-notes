const db = require("../database/models");
//const Movies = require('../database/models/Movies.js');


const moviesController = {
    list: function(req, res) {
        db.Movies.findAll()
        .then(function(movies) {
            res.render('moviesList', {movies : movies})
        })
    },
    detail: function(req, res) {
        db.Movies.findByPk(req.params.id)
        .then(function(movie) {
            res.render('moviesDetail', {movie : movie})
        })
    },
    new: function(req, res) {
        db.Movies.findAll({
            order: [
                ["release_date", "DESC"]
            ],
            limit: 5
        })
            .then(function(movies) {
                res.render("newestMovies", {movies : movies})
            })

    },
    recommended: function(req, res) {
        db.Movies.findAll({
            where: {
                rating: {[db.Sequelize.Op.gt]: 8}
            },
            order: [
                ["rating", "DESC"]
            ]
        })
            .then(function(movies) {
                res.render("recommendedMovies", {movies : movies})
            })

    },
    add: function(req, res) {
        res.render("moviesAdd")
    },
    create: function(req, res, next) {
        const {title, rating, awards, release_date, length} = req.body;
        db.Movies.create({
            title,
            rating,
            awards,
            release_date,
            length
        })
        .then(() => {
            res.redirect("/movies")
        })
        .catch(next);
        
    },
    edit: function(req, res) {
        db.Movies.findByPk(req.params.id)
        .then(function(Movie) {
            res.render("moviesEdit", {Movie: Movie});
        })
    },
    update: function(req, res, next) {
        const {title, rating, awards, release_date, length} = req.body;
        const newData = {
            title,
            rating,
            awards,
            release_date,
            length
        }
        const options = { where: {id: req.params.id} }
        
        db.Movies.update(newData, options)
        .then(() => {
            res.redirect("/movies")
        })
        .catch(next);
    },
    delete: function(req, res) {
        db.Movies.findByPk(req.params.id)
        .then(function(Movie) {
            res.render("moviesDelete", {Movie: Movie});
        })
    },
    destroy: function(req, res, next) {
        const options = { where: {id: req.params.id} }
        db.Movies.destroy(options)
        .then(n => {
            console.log(`${n} movies where deleted`)
            res.redirect("/movies")
        })
        .catch(next);
    }
};

module.exports = moviesController;