let result;

module.exports = function (event) {
    result = [];
    validateName(event.title);
    validateDescription(event.description);
    validatePlace(event.place);
    validateDate(event.date);
    validateTime(event.time);
    validateBudget(event.budget);
    return result;
}

function validateName(name) {
    if (name.length <= 3 ||  name === null) {
        result.push("Event's name is too short!");
    } else if (name.length > 22) {
        result.push("Event's name is too long!");
    }
}

function validateDescription(description) {
    if (description.length >= 100) {
        result.push("Event's description is too long!");
    }
}

function validatePlace(place) {
    if (place.length < 3 || place === null) {
        result.push("Event's place is too short!");
    } else if (place.length > 15) {
        result.push("Event's place is too long!");
    }
}

function validateDate(date) {
    if (date.length > 5) {
        result.push("Event's date is too long!");
    }
}

function validateTime(time) {
    if (time.length > 5) {
        result.push("Event's time is too long!");
    }
}

function validateBudget(budget) {
    if (budget < 0) {
        result.push("Event's budget must be positive!");
    } else if (budget > 999999) {
        result.push("Event's budget is too much!");
    }
}