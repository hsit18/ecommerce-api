'use strict';

/**
 * Module dependencies.
 */
import express from 'express';

import ProductController from './controller';

const router = express.Router();

router.get('/', ProductController.getProduct);

router.post('/', ProductController.addProduct);

export default router;