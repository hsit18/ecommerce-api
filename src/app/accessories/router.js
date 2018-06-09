'use strict';

/**
 * Module dependencies.
 */
import express from 'express';

import AccessoriesController from './controller';

const router = express.Router();

router.get('/', AccessoriesController.getAccessories);

router.post('/', AccessoriesController.addAccessory);

router.post('/buynow', AccessoriesController.updateAccessoriesQuantity);

export default router;