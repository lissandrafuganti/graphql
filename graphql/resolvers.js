
//const models = require('./../models/user');

import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

const resolvers = {
  
    Date: new GraphQLScalarType({
      name: 'Date',
      description: 'Date custom scalar type',
      parseValue(value) {
        return new Date(value); // value from the client
      },
      serialize(value) {
        return value.getTime(); // value sent to the client
      },
      parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
          return parseInt(ast.value, 10); // ast value is always in string format
        }
        return null;
      },
    }),
  Query: {
      user:() => User.find(),
      user:  (_, { id }) =>User.findById(id)
      
     
    },
    Mutation: {
      createUser: (_, {}, { models : { User }}) => User.create({ username:String, password:String,birthday:Date })
    }
}

module.exports = resolvers