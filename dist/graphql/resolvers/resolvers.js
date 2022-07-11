"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const lodash_1 = require("lodash");
const userResolvers_1 = require("./userResolvers");
const postResolvers_1 = require("./postResolvers");
const likeResolvers_1 = require("./likeResolvers");
const commentResolvers_1 = require("./commentResolvers");
exports.resolvers = (0, lodash_1.merge)(userResolvers_1.userResolvers, postResolvers_1.postResolvers, likeResolvers_1.likeResolvers, commentResolvers_1.commentResolvers);
