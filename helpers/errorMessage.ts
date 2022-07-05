function sendErrorMessage(error: string, message: string) {
    return {
        error, message
    }
}


module.exports = { sendErrorMessage }