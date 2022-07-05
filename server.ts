import express from "express"
import { ApolloServer } from "apollo-server-express"
const { typeDefs } = require("./graphql/types/typeDefs")
const { resolvers } = require("./graphql/resolvers/resolvers")
const authRoute = require("./routes/authRoute")
const uploadRoute = require("./routes/uploadRoute")
const app = express()
const server = new ApolloServer({ typeDefs, resolvers })


app.use("/auth", authRoute)
app.use("/upload", uploadRoute)


async function startApolloServer() {
    await server.start()
    server.applyMiddleware({ app })
}
startApolloServer()
const PORT = process.env.port || 5000
app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
