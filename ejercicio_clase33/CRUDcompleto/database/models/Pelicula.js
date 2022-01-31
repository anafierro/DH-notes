module.exports = (sequelize, dataTypes) => {
	const Pelicula = sequelize.define('Pelicula', {
	  id : {
	
	  autoIncrement: true,
	  primaryKey: true,
	  type: dataTypes.INTEGER

	  },
      updated_at: {
        type: dataTypes.DATE
      },
	  title: {
	    type: dataTypes.STRING
	  },
      rating: {
        type: dataTypes.DOUBLE
      },
      awards: {
        type: dataTypes.INTEGER
      },
      release_date: {
        type: dataTypes.DATE
      },
      length: {
        type: dataTypes.INTEGER
      },
      genre_id: {
        type: dataTypes.INTEGER
      }
	}, 
    {
	  tableName: 'movies',
      timestamps: false
	});

    Pelicula.associate = function (models) {
        Pelicula.belongsTo(models.Genero, {
            as: 'genero',
            foreignKey: 'genre_id'
        });
        Pelicula.belongsToMany(models.Actor, {
            as: 'actores',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        });
    }
	
	  return Pelicula;
	
	}