"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_1 = require("@graphql-tools/schema");
const userTypes_1 = require("./types/userTypes");
const postTypes_1 = require("./types/postTypes");
const resolvers_1 = require("./resolvers/resolvers");
exports.schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: [userTypes_1.typeDefs, postTypes_1.typeDefs], resolvers: resolvers_1.resolvers
});
