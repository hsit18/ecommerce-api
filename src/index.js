'use strict';

/**
 * Module dependencies.
 */
import './env';



console.log("patth------",process.env.PORT);


import appConfig from './config/index';
import serverInit from './app/index';

var server = appConfig(function(app, db) {
  console.log("app ----- ", app);
  console.log("db ----- ", db);
	serverInit(app, db);
});

process.on('uncaughtException', function (err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
  console.error(err.stack);
  process.exit(1);
});

process.on('SIGINT', function() {
  console.log('Stopping the server app....');
  appConfig.stop(function () {
    console.log('Server Stopped..');
    process.exit(1);
  });
});
