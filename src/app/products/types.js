const ProductType = `
  type Product {
    _id: String!
    sku: String!
    name: String!
    description: String
    category: Category
    brands: Brand
    images: [String]
    price: Int!
    numberOfStrings: Int!
    soldDate: String
    rating: Int!
  }

  input ProductInput {
    name: String!
    sku: String! 
    description: String
    categoryId: ID!
    brandId: ID!
    images: [String]
    price: Int!
    numberOfStrings: Int!
    rating: Int!
  }

  input FilterInput {
    search: String,
    categoryIds: [ID]
    brandIds: [ID]
    numberOfStrings: [Int]
  }

  extend type Query {
    product(id: ID): Product,
    products(filter: FilterInput, page_size:Int, page_num:Int): [Product]
  }
  
  extend type Mutation {
    createProduct(input: ProductInput): Product
    removeProduct(id: ID!): String
  }

`;

export default ProductType;
