import ProductsModel from './model';
import CategoriesModel from '../categories/model';

export default {
  Query: {
    product(root, {id}, context) {
        return ProductsModel.findById(id).then(result => result);
    },
    products(root, {filter, page_size= 10, page_num= 1}, context) {
        
        const searchQuery = {};
        const skips = page_size * (page_num - 1);

        if(filter.search) {
            searchQuery['$or'] = [
                {'name': { '$regex' : filter.search, '$options' : 'ig' }},
                {'sku': { '$regex' : filter.search, '$options' : 'ig' }}
            ];
        }

        if(filter.brandIds && filter.brandIds.length > 0) {
            searchQuery.brandId = { '$in' : filter.brandIds }
        }

        if(filter.categoryIds && filter.categoryIds.length > 0) {
            searchQuery.categoryId = { '$in' : filter.categoryIds }
        }

        if(filter.numberOfStrings && filter.numberOfStrings.length > 0) {
            searchQuery.numberOfStrings = { '$in' : filter.numberOfStrings }
        }

        return ProductsModel.find(searchQuery).skip(skips).limit(page_size).then(result => result);
    },
  },

  Mutation: {
    createProduct(root, ProductInput, context) {
        const product = new ProductsModel(ProductInput.input);
        return product.save();
    },

    removeProduct(root, {id}, context) {
        return ProductsModel.remove({_id: id}).then(result => result);
    }
  },

  Product: {
    category({categoryId}) {
        return CategoriesModel.findById(categoryId).then(result => result);
    }
  }
  
};