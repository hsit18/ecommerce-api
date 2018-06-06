'use strict';

/**
 * Module dependencies.
 */
import errorHandler from '../config/errorHandler';
import productsRouter from './products/router';

const serverInit = (app) => {
	
	app.all('/api/*', function(req, res, next){
		console.log('server setup testing......');
		next();
	});

	app.use('/api/product', productsRouter);
	
	app.use((err, req, res, next) => {
		console.log(err);
		if (!err) {
			return next();
		}
		errorHandler.getFormattedError(req, res, err, function(errStatus, errorObj) {
			res.status(errStatus).send(errorObj);
		});
	});
}

export default serverInit;