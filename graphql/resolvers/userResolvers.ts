import { PrismaClient } from "@prisma/client"
const { users } = new PrismaClient()

interface user {
    user: {
        username: string
        name: string
        email: string
        password: string
        bio?: string
    }
}

const userResolvers = {
    addUser: async (parent: any, args: user, ctx: any) => {
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
    }

}

module.exports = userResolvers 