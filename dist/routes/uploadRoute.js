"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { sendErrorMessage } = require("../helpers/errorMessage");
const router = (0, express_1.Router)();
router.get("/image", (req, res) => {
    res.status(400).send(sendErrorMessage("invalid route", "can't send image url right now"));
});
module.exports = router;
