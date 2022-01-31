let db = require("../database/models");

let peliculasController = {
    crear: function(req, res) {
       db.Genero.findAll()
        .then(function(generos) {
            return res.render('creacionPeliculas', { generos : generos })
        })
    },
    guardar: function(req, res) {
        const {title, rating, awards, release_date, length, genre_id} = req.body;
        db.Pelicula.create({
            title,
            awards,
            release_date,
            length,
            rating,
            genre_id
        })

        .then(() => {
            res.redirect("/peliculas")
        })
    },
    listado: function(req, res) {
        db.Pelicula.findAll()
        .then(function(peliculas) {
            res.render('listadoPeliculas', {peliculas : peliculas})
        })
    },
    detalle: function(req, res) {
        db.Pelicula.findByPk(req.params.id, {
            include: [{association: "genero"}, {association: "actores"}]
        })
        .then(function(pelicula) {
            res.render('detallePelicula', {pelicula : pelicula})
        })
    },
    editar: function(req, res) {
        let pedidoPelicula = db.Pelicula.findByPk(req.params.id); 
        let pedidoGeneros = db.Genero.findAll();

        Promise.all([pedidoPelicula, pedidoGeneros])
            .then(function([pelicula, generos]) {
                res.render("editarPelicula", {pelicula : pelicula, generos : generos});
             })
    },
    actualizar: function(req, res) {
        const {title, rating, awards, release_date, length, genre_id} = req.body;
        const newData = {
            title,
            awards,
            release_date,
            length,
            rating,
            genre_id
        }
        const options = { where: {id: req.params.id} }
        
        db.Pelicula.update(newData, options)
        .then(() => {
            res.redirect("/peliculas/" + req.params.id)
        })
    },
    borrar: function(req, res) {
        const options = { where: {id: req.params.id} }
        db.Pelicula.destroy(options)
        .then(n => {
            console.log(`${n} peliculas fueron borradas`)
            res.redirect("/peliculas")
        })
    }
};

module.exports = peliculasController; 