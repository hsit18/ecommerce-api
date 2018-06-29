import CategoriesModel from './model';

export default {
  Query: {
    category(root, {id}, context) {
        return CategoriesModel.findById(id).then(result => result);
    },
    categories(root, {id}, context) {
        return CategoriesModel.find({}).then(result => result);
    },
  },

  Mutation: {
    createCategory(root, {name}, context) {
        const category = new CategoriesModel({
            name
        });
        return category.save();
    },
  }
  
};