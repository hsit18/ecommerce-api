'use strict';

/**
 * Module dependencies.
 */

import mongoose from 'mongoose';
import CONSTANTS from './constants';

mongoose.Promise = global.Promise;

const connect = (callback) => {
  console.log("URL ----   ", CONSTANTS.MONGOOSE_DB.URL);
  mongoose.connect(CONSTANTS.MONGOOSE_DB.URL, function(err) {
      if (err) {
          if (callback) callback(err);
      } else {
          mongoose.set('debug', CONSTANTS.MONGOOSE_DB.DEBUG);
          if (callback) callback(null);
      }
  });
};

const disconnect = (callback) => {
  mongoose.disconnect(function(err) {
	  callback(err);
  });
};

export default connect;