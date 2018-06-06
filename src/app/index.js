'use strict';

/**
 * Module dependencies.
 */
import productRouter from './products/route';

const serverInit = function(app) {
	
	app.all('/api/*', function(req, res, next){
		console.log('server setup testing......');
		next();
	});

	app.use('/api/product', productRouter);
}




export default serverInit;