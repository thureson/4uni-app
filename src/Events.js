import React from 'react';
import { View, Text } from "react-native";
import { SuggestedEvents } from './SuggestedEvents.js';
import { UpcomingEvents } from './UpcomingEvents.js';

export class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = { upcoming: true };
        this.changeView = this.changeView.bind(this);
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