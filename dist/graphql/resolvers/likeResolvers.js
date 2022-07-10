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
exports.likeResolvers = void 0;
const client_1 = require("@prisma/client");
const moment_1 = __importDefault(require("moment"));
const { likes } = new client_1.PrismaClient();
exports.likeResolvers = {
    Mutation: {
        likePost: (parent, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const { postId, userId } = args.data;
            const timestamp = (0, moment_1.default)().format("MMMM Do YYYY, h:mm:ss A");
            const liked = yield likes.findMany({
                where: {
                    userId, postId
                }
            });
            console.log(liked);
            if (liked.length > 0) {
                yield likes.deleteMany({
                    where: {
                        postId, userId
                    }
                });
                return `like removed with postId - ${postId}, userId - ${userId}`;
            }
            else {
                yield likes.create({
                    data: {
                        createdAt: timestamp,
                        postId, userId
                    }
                });
                return `post with id - ${postId} liked by user - ${userId}`;
            }
        })
    }
};
