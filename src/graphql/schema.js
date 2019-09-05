const {gql} = require ('apollo-server-express')

const typeDefs = gql`
scalar Date
 type MyType {
    created: Date
 }
    type User {
  id: Int!
  username: String!
  password: String!
  birthday: Date
}

type Query {
 getUser(id:Int!):User
}

type Mutation {
  createUser(username: String!, password: String!,birthday:Date): User
}
`;

module.exports = typeDefs;