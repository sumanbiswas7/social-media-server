"use strict";
const { gql } = require("apollo-server-express");
const typeDefs = gql `
  input UserInput {
    username: String!
    name: String!
    bio: String
    email: String!
    password: String!
  }

  type Post {
    id: Int
    caption: String
    image: String
    createdAt: String
    userId: Int
    user: User
    likes: [Like]
    comments: [Comment]
  }
  type Comment {
    id: Int
    comment: String
    createdAt: String
    userId: Int
    postId: Int
    user: User
    post: Post
  }
  type Like {
    id: Int
    createdAt: String
    userId: Int
    postId: Int
    user: User
    post: Post
  }

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

  type Query {
    users: [User]
  }
  type Mutation {
    addUser(user: UserInput!): String
    deleteUser(userId: Int!): String
  }
`;
module.exports = { typeDefs };
