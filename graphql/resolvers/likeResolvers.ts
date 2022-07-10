import { PrismaClient } from "@prisma/client"
import moment from "moment"
const { likes } = new PrismaClient()
interface Like {
    data: {
        userId: number
        postId: number
    }
}

export const likeResolvers = {

    Mutation: {
        likePost: async (parent: any, args: Like, ctx: any) => {
            const { postId, userId } = args.data;
            const timestamp = moment().format("MMMM Do YYYY, h:mm:ss A");
            const liked = await likes.findMany({
                where: {
                    userId, postId
                }
            })
            console.log(liked)
            if (liked.length > 0) {
                await likes.deleteMany({
                    where: {
                        postId, userId
                    }
                })
                return `like removed with postId - ${postId}, userId - ${userId}`
            } else {
                await likes.create({
                    data: {
                        createdAt: timestamp,
                        postId, userId
                    }
                })
                return `post with id - ${postId} liked by user - ${userId}`
            }
        }
    },
    Query: {
        postLikes: async (parent: any, args: { postId: number }, ctx: any) => {
            const postId = args.postId
            return await likes.findMany({
                where: {
                    postId,
                }, include: {
                    user: true
                }
            })
        }
    }
}