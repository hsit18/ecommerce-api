const CategoryType = `
  type Category {
    _id: String!
    name: String!
  }
  extend type Query {
    category(id: ID): Category,
    categories: [Category]
  }

  extend type Mutation {
    createCategory(name: String!): Category
  }
`;

export default CategoryType;
