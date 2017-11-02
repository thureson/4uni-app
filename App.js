import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import {NavBar} from './src/NavBar.js';
import {Content} from './src/Content.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'Feed' };
    this._onHomeButtonPress = this._onHomeButtonPress.bind(this);
    this._onEventsButtonPress = this._onEventsButtonPress.bind(this);
    this._onReservationsButtonPress = this._onReservationsButtonPress.bind(this);
    this._onOfficialButtonPress = this._onOfficialButtonPress.bind(this);
  }
  _onHomeButtonPress() {
    this.setState({page: 'Feed'});
  }

  _onEventsButtonPress() {
    this.setState({page: 'Events'});
  }

  _onReservationsButtonPress() {
    this.setState({page: 'Reservations'});
  }

  _onOfficialButtonPress() {
    this.setState({page: 'Official'});
  }

  render() {
    return (
      <View style={{flex: 1}}>

        {/* Phone's own info-space */}
        <View style={{flex: 0.3, backgroundColor: 'skyblue'}}></View>

        {/* Header
        <View style={{flex: 0.6, backgroundColor: 'ghostwhite'}}>
          <View style={styles.container}>
            <Text style={styles.logo} >{this.state.page}</Text>
          </View>
        </View>*/}

        {/* Page-content */}
        <View style={{flex: 6.2}}>
            <Content page={this.state.page}/>
        </View>
        
        {/* Navigator on bottom screen */}
        <View style={{flex: 1}}>
          <NavBar onHomeButtonPress={this._onHomeButtonPress} 
                  onEventsButtonPress={this._onEventsButtonPress} 
                  onReservationsButtonPress={this._onReservationsButtonPress} 
                  onOfficialButtonPress={this._onOfficialButtonPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
