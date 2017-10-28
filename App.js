import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import {NavBar} from './classes/NavBar.js';
import {Chat} from './classes/Chat.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'Home' };
    this._onHomeButtonPress = this._onHomeButtonPress.bind(this);
    this._onEventsButtonPress = this._onEventsButtonPress.bind(this);
    this._onNoticesButtonPress = this._onNoticesButtonPress.bind(this);
    this._onHoasButtonPress = this._onHoasButtonPress.bind(this);
  }
  _onHomeButtonPress() {
    this.setState({page: 'Home'});
  }

  _onEventsButtonPress() {
    this.setState({page: 'Events'});
  }

  _onNoticesButtonPress() {
    this.setState({page: 'Notices'});
  }

  _onHoasButtonPress() {
    this.setState({page: 'Hoas'});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <View style={styles.container}>
            <Text style={styles.logo} >{this.state.page}</Text>
          </View>
        </View>

        {/* View-content */}
        <Chat />
        
        {/* Navigator on bottom screen */}
        <NavBar onHomeButtonPress={this._onHomeButtonPress} 
                onEventsButtonPress={this._onEventsButtonPress} 
                onNoticesButtonPress={this._onNoticesButtonPress} 
                onHoasButtonPress={this._onHoasButtonPress} />
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
