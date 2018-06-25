import merge from "lodash/merge";
import { makeExecutableSchema } from "graphql-tools";

import categoriesTypes from './categories/types';
import categoriesResolver from './categories/resolver';

import brandsTypes from './brands/types';
import brandsResolver from './brands/resolver';

import productsTypes from './products/types';
import productsResolver from './products/resolver';

const testSchema = `
type Query {
  hi: String
}
type Mutation {
  hi(name: String!): String
}
`;

const typeDefs = [testSchema, categoriesTypes, brandsTypes, productsTypes];
console.log("typeDefs::   ", typeDefs);
const testResolvers = {
  Query: {
    hi() {
      return "Hello Harry...";
    }
  },

  Mutation: {
    hi(root, {name}, context) {
      return "Hello "+ name;
    }
  }
};


const resolvers = merge(testResolvers, categoriesResolver, brandsResolver, productsResolver);
console.log("resolvers::   ", resolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;



