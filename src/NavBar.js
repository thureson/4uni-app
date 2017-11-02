import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {NavButton} from './NavButton.js';

export class NavBar extends React.Component {
    render() {
        return (
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'steelblue'}}>
          <NavButton onButtonPress={this.props.onHomeButtonPress} backcolor='powderblue' texts='Home' />
          <NavButton onButtonPress={this.props.onEventsButtonPress} backcolor='skyblue' texts='Events' />
          <NavButton onButtonPress={this.props.onReservationsButtonPress} backcolor='powderblue' texts='Reserve' />
          <NavButton onButtonPress={this.props.onOfficialButtonPress} backcolor='skyblue' texts='Official' />
        </View>
        )
    }
}