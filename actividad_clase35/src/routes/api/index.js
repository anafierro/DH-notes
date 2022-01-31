const express = require('express');
const apiRouter = express.Router();

const genresRoutes = require('./genresRoutes');
const moviesRoutes = require('./moviesRoutes');

apiRouter.use(genresRoutes);
apiRouter.use(moviesRoutes);

module.exports = apiRouter;