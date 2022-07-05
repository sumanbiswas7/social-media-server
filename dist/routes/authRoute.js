"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { sendErrorMessage } = require("../helpers/errorMessage");
const router = (0, express_1.Router)();
router.get("/signup", (req, res) => {
    res.status(400).send(sendErrorMessage("invalid route", "can't perform signup right now"));
});
module.exports = router;
