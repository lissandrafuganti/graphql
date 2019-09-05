require('dotenv/config');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const models =require('./models');
// Construct a schema, using GraphQL schema language
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
})


const app = express();
server.applyMiddleware({ app });
models.sequelize.authenticate ();
models.sequelize.sync()
  .then(function(){
app.listen(4000, () => 
console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)});


 


