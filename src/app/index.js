'use strict';

/**
 * Module dependencies.
 */


const serverInit = function(app) {
	
	app.all('*', function(req, res, next){
		console.log('server setup testing......');
		res.send('server setup testing......');
	
	});
}




export default serverInit;