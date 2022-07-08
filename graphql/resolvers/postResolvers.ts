import { PrismaClient } from "@prisma/client"
const { posts } = new PrismaClient()

export const postResolvers = {
    Query: {
        posts: async (parent: any, args: any, ctx: any) => {
            const allposts = await posts.findMany({
                include: {
                    user: true,
                    // likes: true,
                    // comments: true
                }
            })
            console.log(allposts)
            return allposts
        }
    },
    Mutation: {
        createPost: async (parent: any, args: any, ctx: any) => {
            const { caption, image, userId } = args.post;
            await posts.create({
                data: {
                    caption,
                    userId,
                    image,
                }
            })
            return "post created sucessfully"
        }
    },
}
