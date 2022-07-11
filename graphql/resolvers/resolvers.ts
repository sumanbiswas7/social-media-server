import { merge } from "lodash"
import { userResolvers } from "./userResolvers"
import { postResolvers } from "./postResolvers"
import { likeResolvers } from "./likeResolvers"
import { commentResolvers } from "./commentResolvers"

export const resolvers = merge(userResolvers, postResolvers, likeResolvers, commentResolvers)

