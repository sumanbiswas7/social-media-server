import { Router } from "express";
const { sendErrorMessage } = require("../helpers/errorMessage")
const router = Router()

router.get("/image", (req, res) => {
    res.status(400).send(sendErrorMessage("invalid route", "can't send image url right now"))
})

module.exports = router