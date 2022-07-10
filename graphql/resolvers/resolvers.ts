import { merge } from "lodash"
import { userResolvers } from "./userResolvers"
import { postResolvers } from "./postResolvers"
import { likeResolvers } from "./likeResolvers"

export const resolvers = merge(userResolvers, postResolvers, likeResolvers)

