"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const lodash_1 = require("lodash");
const userResolvers_1 = require("./userResolvers");
const postResolvers_1 = require("./postResolvers");
exports.resolvers = (0, lodash_1.merge)(userResolvers_1.userResolvers, postResolvers_1.postResolvers);
