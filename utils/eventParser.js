module.exports = function (allEvents) {
    var upcomingEvents = [];
    var suggestedEvents = [];

    allEvents.forEach(function (event) {
        if (event.isUpcoming) {
            upcomingEvents.push(event);
        } else {
            suggestedEvents.push(event);
        }
    });

    return {
        upcomingEvents: upcomingEvents,
        suggestedEvents: suggestedEvents
    };
}