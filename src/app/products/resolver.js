import ProductsModel from './model';
import CategoriesModel from '../categories/model';

export default {
  Query: {
    product(root, {id}, context) {
        return ProductsModel.findById(id).then(result => result);
    },
    products(root, {}, context) {
        return ProductsModel.find({}).then(result => result);
    },
  },

  Mutation: {
    createProduct(root, ProductInput, context) {
        console.log("ProductInput ------ ", ProductInput);
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