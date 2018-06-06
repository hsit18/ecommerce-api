'use strict';

import mongoose from 'mongoose';
import CONSTANTS from './constants';

let dbHandler;

mongoose.Promise = global.Promise;

export function connect (callback) {
  console.log("URL ----   ", CONSTANTS.MONGOOSE_DB.URL);
  dbHandler = mongoose.connect(CONSTANTS.MONGOOSE_DB.URL, function(err) {
      if (err) {
          if (callback) callback(err);
      } else {
          mongoose.set('debug', CONSTANTS.MONGOOSE_DB.DEBUG);
          if (callback) callback(null, dbHandler);
      }
  });
};

export function getDbHandler() {
  return dbHandler;
};

export function disconnect(callback) {
  mongoose.disconnect(function(err) {
	  callback(err, dbHandler);
  });
};
