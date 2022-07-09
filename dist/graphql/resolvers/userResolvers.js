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
exports.userResolvers = void 0;
const client_1 = require("@prisma/client");
const moment_1 = __importDefault(require("moment"));
const { users } = new client_1.PrismaClient();
exports.userResolvers = {
    Query: {
        users: () => __awaiter(void 0, void 0, void 0, function* () {
            const allusers = yield users.findMany({
                select: {
                    id: true,
                    name: true,
                    username: true,
                    bio: true,
                    email: true,
                    createdAt: true,
                    password: true,
                    posts: true
                }
            });
            return allusers;
        })
    },
    Mutation: {
        createUser: (parent, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const { email, name, password, username, bio } = args.user;
            const timestamp = (0, moment_1.default)().format("MMMM Do YYYY, h:mm:ss A");
            yield users.create({
                data: {
                    email, name, password, username, bio, createdAt: timestamp
                }
            });
            return "user created sucess";
        }),
        deleteUser: (parent, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const userId = args.userId;
            yield users.delete({
                where: {
                    id: userId
                }
            });
            return `user with id - ${userId} deleted sucessfully`;
        }),
        updateUser: (parent, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const { userId, bio, name, username } = args.user;
            if (!userId)
                return "userId is needed";
            yield users.update({
                where: {
                    id: userId
                },
                data: {
                    bio: bio || undefined,
                    name: name || undefined,
                    username: username || undefined
                },
            });
            return `user with id - ${userId} updated sucessfully`;
        })
    }
};
