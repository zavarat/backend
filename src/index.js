const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: __dirname + "/schema.graphql",
  resolvers,
  context: {
    prisma
  }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
