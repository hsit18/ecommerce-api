import bodyParser from 'body-parser';
import session from 'express-session';
import express from 'express';

import CONSTANTS from './constants';

const app = express();

export default function() {
	app.use(session({secret: 'ecommercesecretkey',saveUninitialized: true,resave: true}));

	const allowCrossDomain = function(req, res, next) {
	    res.header('Access-Control-Allow-Origin', '*');
	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	    res.header('Access-Control-Allow-Headers', 'Content-Type');
	    next();
	};
	// app.use(express.static(config.rootPath + '/public'));
	
	// app.use('/uploads',  express.static(config.rootPath + '/uploads'));
	app.use(bodyParser.json());
	app.use(allowCrossDomain);
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	console.log('Server port ...'+ CONSTANTS.PORT);

	app.listen(CONSTANTS.PORT, function() {
		console.log('Server listening on port ...'+ CONSTANTS.PORT);
	});
	
	return app;
}
	