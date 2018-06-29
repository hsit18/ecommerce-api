const BrandType = `
  type Brand {
    _id: String!
    name: String!
  }
  extend type Query {
    brand(id: ID): Brand,
    brands: [Brand]
  }

  extend type Mutation {
    createBrand(name: String!): Brand
  }
`;

export default BrandType;
