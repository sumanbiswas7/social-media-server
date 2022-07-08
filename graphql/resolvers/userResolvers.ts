import { PrismaClient } from "@prisma/client"
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
    Mutation: {
        addUser: async (parent: any, args: User, ctx: any) => {
            const { email, name, password, username, bio } = args.user;
            await users.create({
                data: {
                    email, name, password, username, bio
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

