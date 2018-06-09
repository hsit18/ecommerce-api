'use strict';

/**
 * Module dependencies.
 */
import async from 'async';

import ProductsModel from './model';
import CONSTANTS from './../../config/constants';

class ProductsController {

    getProducts(req, res, next) {        
        ProductsModel.find({}, (err, response) => {
            if(err) { 
                next({
                    errNum: CONSTANTS.ERROR_CODES.UNEXPECTED_ERROR
                });
            } else { 
                res.send({error: false, products: response});	
            }
        });
    }

    addProduct(req, res, next) {
        const productObj = new ProductsModel();
        const body = req.body;

        productObj.sku = body.sku;
        productObj.name = body.name;
        productObj.description = body.description;
        productObj.categoryId = body.categoryId;
        productObj.brandId = body.brandId;
        productObj.price = body.price;
        productObj.productType = body.productType;
        productObj.numberOfStrings = body.numberOfStrings;
        productObj.soldDate = body.soldDate;

        productObj.save((err) => {
            if (err) {
                next(err);
            } else {
                res.send({error: false, message: "Product Added Successfully."});
            }
        });
    }

    updateProductSoldDate(req, res, next) {
        
        async.eachSeries(req.body.productIds || [], (productId, cb) => {
            ProductsModel.update({'_id': productId, 'soldDate': {$exists: false}}, { $set: { soldDate: new Date } }, (err, response) => {
                if(err) { 
                    cb(err);     
                } else { 
                    cb(null, {error: false});	
                }
            });
        }, (err) => {
            if(err) {
                next(err);
            } else {
                res.send({error: false, message: "Products sold date added"});
            }
        });
    }
}

export default new ProductsController();