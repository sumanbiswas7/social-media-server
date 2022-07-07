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
const client_1 = require("@prisma/client");
const { users } = new client_1.PrismaClient();
const userResolvers = {
    addUser: (parent, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, name, password, username, bio } = args.user;
        yield users.create({
            data: {
                email, name, password, username, bio
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
    })
};
module.exports = userResolvers;
