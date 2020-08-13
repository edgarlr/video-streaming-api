const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const debug = require('debug')('app:server');

const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundMiddleware');

//  body parser
app.use(express.json());

//  routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors Middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  debug(`[success] Listening http://localhost:${config.port}`);
});
