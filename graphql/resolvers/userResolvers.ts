import { PrismaClient } from "@prisma/client"
import moment from "moment"
const { users } = new PrismaClient()
interface User {
    user: {
        userId?: number
        username: string
        name: string
        email: string
        password: string
        bio?: string
    }
}

export const userResolvers = {
    Query: {
        users: async () => {
            const allusers = await users.findMany({
                select: {
                    id: true,
                    name: true,
                    username: true,
                    bio: true,
                    email: true,
                    createdAt: true,
                    password: true,
                    posts: true
                }
            })
            return allusers
        }
    },
    Mutation: {
        createUser: async (parent: any, args: User, ctx: any) => {
            const { email, name, password, username, bio } = args.user;
            const timestamp = moment().format("MMMM Do YYYY, h:mm:ss A");

            await users.create({
                data: {
                    email, name, password, username, bio, createdAt: timestamp
                }
            })
            return "user created sucess"
        },
        deleteUser: async (parent: any, args: { userId: number }, ctx: any) => {
            const userId = args.userId
            await users.delete({
                where: {
                    id: userId
                }
            })
            return `user with id - ${userId} deleted sucessfully`
        },
        updateUser: async (parent: any, args: User, ctx: any) => {
            const { userId, bio, name, username } = args.user
            if (!userId) return "userId is needed"

            await users.update({
                where: {
                    id: userId
                },
                data: {
                    bio: bio || undefined,
                    name: name || undefined,
                    username: username || undefined
                },
            })
            return `user with id - ${userId} updated sucessfully`
        }
    }

}

