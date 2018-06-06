'use strict';

/**
 * Module dependencies.
 */
import connect from './databases';
import express from './express';


 function init(callback) {
    connect(function(err, db) {
        const app = express(db);
        if (callback) callback(app, db);
    });
}

export default init;