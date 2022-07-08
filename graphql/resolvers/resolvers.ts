import { merge } from "lodash"
import { userResolvers } from "./userResolvers"
import { postResolvers } from "./postResolvers"

export const resolvers = merge(userResolvers, postResolvers)

