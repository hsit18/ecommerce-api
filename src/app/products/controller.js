'use strict';

/**
 * Module dependencies.
 */
import ProductsModel from './model';
import CONSTANTS from './../../config/constants';

class ProductsController {

    getProduct(req, res, next) {
        try {
			ProductsModel.find({}, (err, response) => {
				if(err) { 
                    next({
                        errNum: CONSTANTS.ERROR_CODES.UNEXPECTED_ERROR
                    });
				} else { 
					res.send({error: false, products: response});	
				}
			});
		} catch(e) {
			next({
                errNum: CONSTANTS.ERROR_CODES.UNEXPECTED_ERROR
            });
		}
    }

    addProduct(req, res, next) {
        const productObj = new ProductsModel();
        const body = req.body;

        productObj.sku = body.sku;
        productObj.name = body.name;
        productObj.categoryId = body.categoryId;
        productObj.brandId = body.brandId;
        productObj.price = body.price;
        productObj.productType = body.productType;
        productObj.numberOfStrings = body.numberOfStrings;
        productObj.soldDate = body.soldDate;

        productObj.save((err) => {
            if (err) {
                next({
                    errNum: CONSTANTS.ERROR_CODES.UNEXPECTED_ERROR
                });
            } else {
                res.send({error: false, message: "Product Added Successfully."});
            }
        });
    }
}

export default new ProductsController();