import jwt from "jsonwebtoken";
import express from "express";
import cookieParser from "cookie-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import bodyParser from "body-parser";
// import { typeDefs } from "./schema.js";
// import userResolver from "./resolvers/userResolver.js";
import { typeDefs, resolvers } from "./schema/index.js";
import { configDotenv } from "dotenv";

configDotenv();
const secretKey = process.env.JWT_SECRET;

// Merging the resolvers

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const PORT = 4000;

async function startServer() {
  await server.start();
  const app = express();
  app.use(
    "/graphql",
    cors({ origin: "*" }),
    cookieParser(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: ({ req, res }) => {
        const token = req.cookies?.token || "";
        try {
          const user = jwt.verify(token, secretKey);
          req.user = user;
        } catch (err) {}
        return { req, res };
      },
    })
  );

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}
startServer();
