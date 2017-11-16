import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {NavButton} from './NavButton.js';

export class NavBar extends React.Component {
    render() {
        return (
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#878181'}}>
          <NavButton onButtonPress={this.props.onHomeButtonPress} texts='Feed' />
          <NavButton onButtonPress={this.props.onEventsButtonPress} texts='Events' />
          <NavButton onButtonPress={this.props.onReservationsButtonPress} texts='Reserve' />
          <NavButton onButtonPress={this.props.onOfficialButtonPress} texts='Official' />
        </View>
        )
    }
}