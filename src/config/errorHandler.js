'use strict';

import errorCodes from './errorCodes';
import CONSTANTS from './constants';

const _getErrorDetails = (error, callback) => {
    if(errorCodes[error.errNum]) {
      const errorObj = errorCodes[error.errNum];
      const status = errorObj.htmlStatus ? errorObj.htmlStatus : CONSTANTS.DEFAULT_ERROR_STATUS_CODE;
      errorObj.error = true;
      
      delete errorObj.htmlStatus;
      callback(status, errorObj);
    } else {
      console.log("Unknown Error code:  ", error.errNum);
      callback(CONSTANTS.DEFAULT_ERROR_STATUS_CODE, CONSTANTS.DEFAULT_ERROR);
    }
}

class ErrorHandler {
         
    getFormattedError(req, res, error, callback) {
        if (!error.errNum) {
            CONSTANTS.DEFAULT_ERROR.userMessage = error;
            callback(CONSTANTS.DEFAULT_ERROR_STATUS_CODE, CONSTANTS.DEFAULT_ERROR);
        } else {
            _getErrorDetails(error, callback);
        }
    }
}

export default new ErrorHandler();
