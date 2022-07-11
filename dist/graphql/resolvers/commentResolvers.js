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
exports.commentResolvers = void 0;
const client_1 = require("@prisma/client");
const moment_1 = __importDefault(require("moment"));
const { comments } = new client_1.PrismaClient();
exports.commentResolvers = {
    Query: {},
    Mutation: {
        addComment: (parent, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const timestamp = (0, moment_1.default)().format("MMMM Do YYYY, h:mm:ss A");
            const { comment, postId, userId } = args.data;
            yield comments.create({
                data: { createdAt: timestamp, postId, userId, comment }
            });
            return `comment from ${userId} to the post ${postId}`;
        })
    }
};
