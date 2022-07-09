export const typeDefs = `
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

    type Query {
        posts: [Post]
    }    
    type Mutation {
        createPost(post: PostInput!): String
        deletePost(postId: Int!): String
    }    

`;