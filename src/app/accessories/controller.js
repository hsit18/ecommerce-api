'use strict';

/**
 * Module dependencies.
 */
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
        accessoryObj.types = body.types;
        accessoryObj.price = body.price;
        accessoryObj.quantity = body.quantity;
        accessoryObj.soldQuantity = body.soldQuantity;
        
        accessoryObj.save((err) => {
            if (err) {
                next(err);
            } else {
                res.send({error: false, message: "Accessory Added Successfully."});
            }
        });
    }
}

export default new AccessoriesController();