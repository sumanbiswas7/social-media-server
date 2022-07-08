"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const test = {
  Query: {
    func1: () => null,
    func2: () => null,
  },
  Mutation: {
    func3: () => null,
    func4: () => null,
  },
};
const mm = {
  Query: {
    func1: "lol",
  },
};
const m2 = {
  Query: {
    func2: "lol2",
  },
};
const res = (0, lodash_1.merge)(mm, m2);
console.log(res);
