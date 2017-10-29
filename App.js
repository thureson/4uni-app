import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import {NavBar} from './src/NavBar.js';
import {Content} from './src/Content.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'home' };
    this._onHomeButtonPress = this._onHomeButtonPress.bind(this);
    this._onEventsButtonPress = this._onEventsButtonPress.bind(this);
    this._onNoticesButtonPress = this._onNoticesButtonPress.bind(this);
    this._onHoasButtonPress = this._onHoasButtonPress.bind(this);
  }
  _onHomeButtonPress() {
    this.setState({page: 'home'});
  }

  _onEventsButtonPress() {
    this.setState({page: 'events'});
  }

  _onNoticesButtonPress() {
    this.setState({page: 'notices'});
  }

  _onHoasButtonPress() {
    this.setState({page: 'hoas'});
  }

  render() {
    return (
      <View style={{flex: 1}}>

        {/* Phone's own info-space */}
        <View style={{flex: 0.3, backgroundColor: 'skyblue'}}></View>

        {/* Header */}
        <View style={{flex: 0.6, backgroundColor: 'ghostwhite'}}>
          <View style={styles.container}>
            <Text style={styles.logo} >{this.state.page}</Text>
          </View>
        </View>

        {/* Page-content */}
        <View style={{flex: 5.6}}>
            <Content page={this.state.page}/>
        </View>
        
        {/* Navigator on bottom screen */}
        <View style={{flex: 1}}>
          <NavBar onHomeButtonPress={this._onHomeButtonPress} 
                  onEventsButtonPress={this._onEventsButtonPress} 
                  onNoticesButtonPress={this._onNoticesButtonPress} 
                  onHoasButtonPress={this._onHoasButtonPress} />
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
