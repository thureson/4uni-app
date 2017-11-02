import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {SuggestedEvents} from './SuggestedEvents.js'

export class Events extends React.Component {   
    constructor(props) {
        super(props);
        this.state = { view: "suggestedEvents" };
    }

    render() {
        return (
            <SuggestedEvents />
        );
    }
}