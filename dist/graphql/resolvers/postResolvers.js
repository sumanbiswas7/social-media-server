"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postResolvers = void 0;
const client_1 = require("@prisma/client");
const moment_1 = __importDefault(require("moment"));
const { posts } = new client_1.PrismaClient();
exports.postResolvers = {
    Query: {
        posts: (parent, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const allposts = yield posts.findMany({
                include: {
                    user: true,
                    likes: {
                        include: {
                            user: true
                        }
                    },
                    comments: {
                        include: {
                            user: true
                        }
                    }
                }
            });
            return allposts;
        })
    },
    Mutation: {
        createPost: (parent, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const timestamp = (0, moment_1.default)().format("MMMM Do YYYY, h:mm:ss A");
            const { caption, image, userId } = args.post;
            yield posts.create({
                data: {
                    caption,
                    userId,
                    image,
                    createdAt: timestamp
                }
            });
            return "post created sucessfully";
        }), deletePost: (parent, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const postId = args.postId;
            yield posts.delete({
                where: {
                    id: postId
                }
            });
            return `post with id - ${postId} deleted sucessfully`;
        }),
    },
};
