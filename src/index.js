'use strict';

/**
 * Module dependencies.
 */
import './env';
import start, {stop} from './config/index';
import serverInit from './app/index';

start(function(app, db) { 
    serverInit(app, db);

    process.on('uncaughtException', (err) => {
        console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
        console.error(err.stack);
        process.exit(1);
    });
    
    process.on('SIGINT', () => {
        console.log('Stopping the server app....');
        stop(() => {
          console.log('Server Stopped..');
          process.exit(0);
        });
    });
  
});

