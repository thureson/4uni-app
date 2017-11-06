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
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                var parsedEvents = eventParser(responseJson);
                this.setState({
                    upcomingEvents: parsedEvents.upcomingEvents,
                    suggestedEvents: parsedEvents.suggestedEvents
                });
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
            pageToShow = <UpcomingEvents onPress={this.changeView} events={this.state.upcomingEvents} /> :
            pageToShow = <SuggestedEvents onPress={this.changeView} events={this.state.suggestedEvents} update={this.getData} />

        return (
            <View style={{ flex: 1 }}>
                {pageToShow}
            </View>
        );
    }
}