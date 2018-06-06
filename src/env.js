'use strict';

/**
 * Module dependencies.
 */
import dotenv from 'dotenv';
import path from 'path';

console.log("patth------", path.join(__dirname, '.env'));
dotenv.config({path: path.join(__dirname, '.env')});