'use strict';

/**
 * Module dependencies.
 */
import express from 'express';

import ProductController from './controller';

const router = express.Router();

router.get('/', ProductController.getProducts);

router.post('/', ProductController.addProduct);

router.post('/buynow', ProductController.updateProductSoldDate);


export default router;