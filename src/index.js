'use strict';

/**
 * Module dependencies.
 */
import './env';
import appConfig from './config/index';
import serverInit from './app/index';

appConfig(function(app, db) { 
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
