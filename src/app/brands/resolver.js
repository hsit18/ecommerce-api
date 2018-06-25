import BrandsModel from './model';

export default {
  Query: {
    brand(root, {id}, context) {
        return BrandsModel.findById(id).then(result => result);
    },
    brands(root, {}, context) {
        return BrandsModel.find({}).then(result => result);
    },
  },

  Mutation: {
    createBrand(root, {name}, context) {
        const brand = new BrandsModel({
            name
        });
        return brand.save();
    },
  }
  
};