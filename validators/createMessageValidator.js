let result;

module.exports = function (message) {
    result = [];
    validateMessage(message.newMessage);
    return result;
}

function validateMessage(message) {
    if (message.length < 1 || message === null || message.length > 50) {
        result.push("Message's length must be equal or between 1 and 50");
    }
}