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
`;