'use strict';

/**
 * Module dependencies.
 */
import dotenv from 'dotenv';
import path from 'path';

console.log("patth------", path.resolve(__dirname, '../.env'));
dotenv.config({path: path.resolve(__dirname, '../.env')});