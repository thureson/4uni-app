import React from 'react';
import { View, Text } from "react-native";
import { SuggestedEvents } from './SuggestedEvents.js';
import { UpcomingEvents } from './UpcomingEvents.js';
import eventParser from "../utils/eventParser";
const api = "https://my-database.herokuapp.com/api/events";

export class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upcoming: true,
            upcomingEvents: [],
            suggestedEvents: []
        };
        this.changeView = this.changeView.bind(this);
    }

    componentDidMount() {
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                var parsedEvents = eventParser(responseJson);
                this.state.upcomingEvents = parsedEvents.upcomingEvents;
                this.state.suggestedEvents = parsedEvents.suggestedEvents;
                console.log("Upcoming events:")
                console.log(this.state.upcomingEvents);
                console.log("--------------------")
                console.log("Suggested events:")
                console.log(this.state.suggestedEvents);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    changeView() {
        this.setState({ upcoming: !this.state.upcoming });
    }

    render() {
        let pageToShow;
        this.state.upcoming ?
            pageToShow = <UpcomingEvents onPress={this.changeView} /> :
            pageToShow = <SuggestedEvents onPress={this.changeView} />

        return (
            <View style={{ flex: 1 }}>
                {pageToShow}
            </View>
        );
    }
}