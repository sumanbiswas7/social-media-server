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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postResolvers = void 0;
const client_1 = require("@prisma/client");
const { posts } = new client_1.PrismaClient();
exports.postResolvers = {
    Query: {
        posts: (parent, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const allposts = yield posts.findMany({
                include: {
                    user: true,
                    // likes: true,
                    // comments: true
                }
            });
            console.log(allposts);
            return allposts;
        })
    },
    Mutation: {
        createPost: (parent, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const { caption, image, userId } = args.post;
            yield posts.create({
                data: {
                    caption,
                    userId,
                    image,
                }
            });
            return "post created sucessfully";
        })
    },
};
