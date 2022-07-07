import express from "express"
import { ApolloServer } from "apollo-server-express"
const authRoute = require("./routes/authRoute")
const uploadRoute = require("./routes/uploadRoute")
import { schema } from "./graphql/schema"
const server = new ApolloServer({ schema })
const app = express()


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
