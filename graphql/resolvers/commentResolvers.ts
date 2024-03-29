import { PrismaClient } from "@prisma/client"
import moment from "moment"
const { comments } = new PrismaClient()
interface Comment {
    data: {
        userId: number
        postId: number
        comment: string
    }
}

export const commentResolvers = {
    Query: {
        postComments: async (parent: any, args: { postId: number }, ctx: any) => {
            const postId = args.postId
            return await comments.findMany({
                where: {
                    postId,
                }, include: {
                    user: true
                }
            })
        }
    },
    Mutation: {
        addComment: async (parent: any, args: Comment, ctx: any) => {
            const timestamp = moment().format("MMMM Do YYYY, h:mm:ss A");
            const { comment, postId, userId } = args.data;
            await comments.create({
                data: { createdAt: timestamp, postId, userId, comment }
            })
            return `comment from ${userId} to the post ${postId}`
        },

        deleteComment: async (parent: any, args: { commentId: number }, ctx: any) => {
            const commentId = args.commentId;
            await comments.delete({
                where: {
                    id: commentId
                }
            })
            return `comment with id ${commentId} deleted`
        }
    }
}
