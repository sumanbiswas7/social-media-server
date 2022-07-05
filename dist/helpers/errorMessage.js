"use strict";
function sendErrorMessage(error, message) {
    return {
        error, message
    };
}
module.exports = { sendErrorMessage };
