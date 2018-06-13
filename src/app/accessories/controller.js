'use strict';

/**
 * Module dependencies.
 */
import async from 'async';

import AccessoriesModel from './model';
import CONSTANTS from './../../config/constants';

class AccessoriesController {

    getAccessories(req, res, next) {
        try {
			AccessoriesModel.find({}, (err, response) => {
				if(err) { 
                    next({
                        errNum: CONSTANTS.ERROR_CODES.UNEXPECTED_ERROR
                    });
				} else { 
					res.send({error: false, accessories: response});	
				}
			});
		} catch(e) {
			next({
                errNum: CONSTANTS.ERROR_CODES.UNEXPECTED_ERROR
            });
		}
    }

    addAccessory(req, res, next) {
        const accessoryObj = new AccessoriesModel();
        const body = req.body;

        accessoryObj.name = body.name;
        accessoryObj.description = body.description;
        accessoryObj.types = body.types;
        accessoryObj.price = body.price;
        accessoryObj.quantity = body.quantity;
        accessoryObj.soldQuantity = body.soldQuantity;
        accessoryObj.images = body.images;

        accessoryObj.save((err) => {
            if (err) {
                next(err);
            } else {
                res.send({error: false, message: "Accessory Added Successfully."});
            }
        });
    }

    updateAccessoriesQuantity(req, res, next) {
        async.eachSeries(req.body.accessoryIds || [], (accessoryId, cb) => {
            AccessoriesModel.update({'_id': accessoryId, $where: "this.quantity > this.soldQuantity" }, { $inc: { soldQuantity: 1} }, (err, response) => {
                if(err) { 
                    console.log(err);
                    cb(err);     
                } else { 
                    cb(null, {error: false});	
                }
            });
        }, (err) => {
            if(err) {
                next(err);
            } else {
                res.send({error: false, message: "All accessories updated"});
            }
        });
    }
}

export default new AccessoriesController();