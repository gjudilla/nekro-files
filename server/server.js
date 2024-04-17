// import express and ApolloServer, including express middleware for Apollo
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import path from "path";
// import authMiddleware from auth.js
import { authMiddleware } from "./utils/auth.js";
// import typeDefs & resolvers for server fetches from schemas, and the db connection from config
import { typeDefs, resolvers } from "./schemas/index.js";
import db from "./config/connection.js";

const PORT = process.env.PORT || 3001;
const app = express();
// instantiate Apollo Server with typeDefs & resolvers objects as arguments
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  // use GraphQL API for data management
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
