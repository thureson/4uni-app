import React from 'react';
import { View, Text } from "react-native";
import { SuggestedEvents } from './SuggestedEvents.js';
import { UpcomingEvents } from './UpcomingEvents.js';
const api = "https://my-database.herokuapp.com/api/events";

export class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = { upcoming: true };
        this.changeView = this.changeView.bind(this);
    }

    componentDidMount() {
        fetch(api)
        .then((response) => response.json())
        .then((responseJson) => console.log(responseJson))
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
        pageToShow = <UpcomingEvents onPress={this.changeView}/> : 
        pageToShow = <SuggestedEvents onPress={this.changeView}/>

        return (
            <View style={{flex: 1}}>
                {pageToShow}
            </View>
        );
    }
}