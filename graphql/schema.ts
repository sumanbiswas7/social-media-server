import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs as User } from "./types/userTypes";
import { typeDefs as Post } from "./types/postTypes";
import { resolvers } from "./resolvers/resolvers";

export const schema = makeExecutableSchema({
    typeDefs: [User, Post], resolvers: resolvers
})