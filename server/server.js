// import express and ApolloServer, including express middleware for Apollo
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
// import authMiddleware from auth.js
const { authMiddleware } = require("./utils/auth");
// import typeDefs & resolvers for server fetches from schemas, and the db connection from config
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
// http and socket.io
const http = require("http");
const { Server } = require("socket.io");
const auth = require("./utils/auth");

const PORT = process.env.PORT || 3001;
const app = express();

// Create an HTTP server to attach Socket.io to it
const httpServer = http.createServer(app);
// Create a new Socket.io server attached to the HTTP server
const io = new Server(httpServer);

// instantiate AApollo Server with typeDefs & resolvers objects as arguments
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    req,
    auth: authMiddleware(req), // Include the authentication middleware in the GraphQL context
  }),
});

// Create a new instance of an Apollo server with the GraphQL schema. Starts Socket.io server as well.
const startApolloServer = async () => {
  await server.start(); // Start the ApolloServer

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // use GraphQL API for data management
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

  // Serve static files in production mode from the build directory
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  // Socket.io connections for managing real-time game interactions
  io.on("connection", (socket) => {
    console.log("New client connected"); // successful client connection

    socket.on("create-session", async (data) => {
      // Handler for creating a new game session
      const session = socket.emit("session-created", { sessionId: session.id }); // Emit an event back to the creator with the session ID
    });

    socket.on("action-taken", (data) => {
      // Handler for taking actions within a game session
      const { sessionId, action } = data;
      io.to(sessionId).emit("update-action", action); // Broadcast the action to all the clients in the session
      // Additional logic to update the database with the action could go here
      //
      //
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected"); // Log whenever a client disconnected
    });
  });

  // Start the server once the database is open
  db.once("open", () => {
    httpServer.listen(PORT, () => {
      // changed app.listen to httpServer.listen
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
      console.log(`Socket.io is running`); // Confirm that Socket.io is running
    });
  });
};

// Call the async function to start the server
startApolloServer();
