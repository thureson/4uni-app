import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {NavButton} from './NavButton.js';

export class NavBar extends React.Component {
    render() {
        return (
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'rgba(37,40,36,0.9)'}}>
          <NavButton onButtonPress={this.props.onHomeButtonPress} texts='Feed' img=''/>
          <NavButton onButtonPress={this.props.onEventsButtonPress} texts='Events' />
          <NavButton onButtonPress={this.props.onReservationsButtonPress} texts='Reserve' />
          <NavButton onButtonPress={this.props.onOfficialButtonPress} texts='Menu' />
        </View>
        )
    }
}