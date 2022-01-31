module.exports = (sequelize, dataTypes) => {
	const Movie = sequelize.define('Movies', {
	  id : {
	
	  autoIncrement: true,
	  primaryKey: true,
	  type: dataTypes.INTEGER

	  },
      created_at: {
        allowNull: true,
        type: dataTypes.DATE
      },
      updated_at: {
        allowNull: true,
        type: dataTypes.DATE
      },
	  title: {
	    allowNull: true,
	    type: dataTypes.STRING
	  },
      rating: {
        allowNull: true,
        type: dataTypes.DECIMAL
      },
      awards: {
        allowNull: true,
        type: dataTypes.INTEGER
      },
      release_date: {
        allowNull: true,
        type: dataTypes.DATE
      },
      length: {
        allowNull: true,
        type: dataTypes.INTEGER
      },
      genre_id: {
        allowNull: true,
        type: dataTypes.INTEGER
      }
	}, 
    {
	  tableName: 'movies',
      timestamps: false
	});
	
	  return Movie;
	
	}