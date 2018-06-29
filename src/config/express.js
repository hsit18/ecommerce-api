import bodyParser from 'body-parser';
import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import session from 'express-session';
import path from 'path';

import schema from '../app/schema';
import CONSTANTS from './constants';

const user = {
	id: 1,
	name: 'harry'
};

const app = express();

const init = () => {
	app.use(session({secret: 'ecommercesecretkey',saveUninitialized: true,resave: true}));

	const allowCrossDomain = function(req, res, next) {
	    res.header('Access-Control-Allow-Origin', '*');
	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	    res.header('Access-Control-Allow-Headers', 'Content-Type');
	    next();
	};

	app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
	app.use('/images', express.static(path.resolve('./public/images')));

	app.use(bodyParser.json());
	app.use(allowCrossDomain);
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use('/graphql', graphqlExpress( (req) => {
		return {
			schema,
			tracing: true,
			cacheControl: true,
			context: {
			  user
			},
		  };
	}));
	app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

	app.listen(CONSTANTS.PORT, function() {
		console.log('Server listening on port ...'+ CONSTANTS.PORT);
	});
	
	return app;
}

export default init;
	