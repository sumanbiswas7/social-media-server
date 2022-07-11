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
    Query: {},
    Mutation: {
        addComment: async (parent: any, args: Comment, ctx: any) => {
            const timestamp = moment().format("MMMM Do YYYY, h:mm:ss A");
            const { comment, postId, userId } = args.data;
            await comments.create({
                data: { createdAt: timestamp, postId, userId, comment }
            })
            return `comment from ${userId} to the post ${postId}`
        }
    }
}
