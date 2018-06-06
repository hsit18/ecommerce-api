'use strict';

/**
 * Module dependencies.
 */
import ProductModel from './model';

class ProductsController {
    
    getProduct(req, res, next) {
        try{
			ProductModel.find({}, function(err, response){
				if(err){ 
					console.log(err);
					res.send("error is fetching products....");
				}
				else { 
					if(response.length > 0){
						res.send(response)
					}else{
                        res.send({'errmsg': 'No brands found.'});
					} 
				}
			});
		} catch(e){
			res.send("error is fetching products....");
		}
    }

    addProduct(req, res, next) {
        console.log("addProduct -------- ");
        const body = req.body;

        var productObj = new ProductModel();
        productObj.sku = body.sku;

        
        productObj.save(function(err) {
            if (err) {
                next(err);
            } else {
            res.send('success');
            }
        });
    }
}

export default new ProductsController();