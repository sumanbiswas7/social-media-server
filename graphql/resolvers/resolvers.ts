const userResolver = require("./userResolvers")
import { PrismaClient } from "@prisma/client"
const { users } = new PrismaClient()

export const resolvers = {
    Query: {
        users: async () => {
            return await users.findMany({
                select: {
                    id: true,
                    name: true,
                    username: true,
                    bio: true,
                    email: true,
                    cratedAt: true,
                    password: true,
                    posts: true
                }
            })
        }
    },
    Mutation: userResolver
}

// module.exports = { resolvers }