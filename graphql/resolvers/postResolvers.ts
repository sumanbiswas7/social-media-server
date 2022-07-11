import { PrismaClient } from "@prisma/client"
import moment from "moment"
const { posts } = new PrismaClient()
interface Post {
    post: {
        caption: string
        image: string
        userId: number
    }
}


export const postResolvers = {
    Query: {
        posts: async (parent: any, args: any, ctx: any) => {
            const allposts = await posts.findMany({
                include: {
                    user: true,
                    likes: {
                        include: {
                            user: true
                        }
                    },
                    comments: {
                        include: {
                            user: true
                        }
                    }
                }
            })
            return allposts
        }
    },
    Mutation: {
        createPost: async (parent: any, args: Post, ctx: any) => {
            const timestamp = moment().format("MMMM Do YYYY, h:mm:ss A");

            const { caption, image, userId } = args.post;
            await posts.create({
                data: {
                    caption,
                    userId,
                    image,
                    createdAt: timestamp
                }
            })
            return "post created sucessfully"
        }, deletePost: async (parent: any, args: { postId: number }, ctx: any) => {
            const postId = args.postId
            await posts.delete({
                where: {
                    id: postId
                }
            })
            return `post with id - ${postId} deleted sucessfully`
        },
    },
}
