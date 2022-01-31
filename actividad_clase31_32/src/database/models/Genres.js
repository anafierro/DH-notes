module.exports = (sequelize, dataTypes) => {
	const Genre = sequelize.define('Genres', {
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
	  name: {
	    allowNull: true,
	    type: dataTypes.STRING
	  },
      ranking: {
        allowNull: true,
        type: dataTypes.INTEGER
      },
      active: {
        allowNull: false,
        type: dataTypes.BOOLEAN
      }
	}, 
    {
	  tableName: 'genres',
      timestamps: false
	});
	
	  return Genre;
	
	}