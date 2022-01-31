const db = require('../../database/models');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;

const moviesController = {
    create: function (req,res) {
        Movies
        .create(req.body)
        .then(function(movie) {
            res.json({
                data: movie,
                status: 200,
                created: 'ok'
            })
        })
    },
    destroy: function (req,res) {
        const options = { where: {id: req.params.id} }
        Movies
        .findOne(options)
        .then(movie => {
            return res.json(movie)
        })
        .then(() => {
            return Movies
            .destroy(options)
        })
    }
}

module.exports = moviesController;

