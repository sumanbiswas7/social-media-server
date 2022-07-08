"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `
    type User {
        id: Int
        username: String
        name: String
        cratedAt: String
        bio: String
        email: String
        password: String
        posts: [Post]
        likes: [Like]
        comments: [Comment]
    }

    input UserInput {
        username: String!
        name: String!
        bio: String
        email: String!
        password: String!
    }

    input UpdateUserInput {
        userId : Int!
        username: String
        name: String
        bio: String
    }

    type Query {
        users: [User]
    }
    
    type Mutation {
        addUser(user: UserInput!): String
        deleteUser(userId: Int!): String
        updateUser(user: UpdateUserInput!): String
    }
`;
