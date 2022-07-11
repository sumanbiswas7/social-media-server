"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `
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

    input PostInput {
        userId : Int!
        caption : String
        image : String
    }

    input LikeInput {
        postId : Int!
        userId : Int!
    }

    input commentInput {
        postId  : Int!
        userId  : Int!
        comment : String!
    }

    type Query {
        posts: [Post]
        postLikes(postId : Int!): [Like]
    }    

    type Mutation {
        createPost(post : PostInput!) : String
        deletePost(postId : Int!) : String
        likePost(data : LikeInput!) : String
        addComment(data : commentInput!) : String
        deleteComment(commentId : Int!) : String
    }    

`;
