'use strict';

/**
 * Module dependencies.
 */
import dotenv from 'dotenv';
import path from 'path';

console.log("patth------", path.resolve(process.cwd(), '.env'));
dotenv.config({path: path.resolve(process.cwd(), '.env')});