import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {NavButton} from './NavButton.js';

export class NavBar extends React.Component {
    render() {
        return (
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'steelblue'}}>
          <NavButton onButtonPress={this.props.onHomeButtonPress} backcolor='powderblue' texts='Home' />
          <NavButton onButtonPress={this.props.onEventsButtonPress} backcolor='skyblue' texts='Events' />
          <NavButton onButtonPress={this.props.onNoticesButtonPress} backcolor='powderblue' texts='Notices' />
          <NavButton onButtonPress={this.props.onHoasButtonPress} backcolor='skyblue' texts='Hoas' />
        </View>
        )
    }
}