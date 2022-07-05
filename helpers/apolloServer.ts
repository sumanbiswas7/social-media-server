import { ApolloServer } from "apollo-server-express"
const { typeDefs } = require("../graphql/types/typeDefs")
const { resolvers } = require("../graphql/resolvers/resolvers")
import express from "express"
const app = express()


const server = new ApolloServer({ typeDefs, resolvers })

async function startApolloServer() {
    await server.start()
    server.applyMiddleware({ app })
}

