import { Router } from "express";
const { sendErrorMessage } = require("../helpers/errorMessage")
const router = Router()

router.get("/signup", (req, res) => {
    res.status(400).send(sendErrorMessage("invalid route", "can't perform signup right now"))
})

module.exports = router