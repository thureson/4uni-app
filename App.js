import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import {NavBar} from './src/NavBar.js';
import {Content} from './src/Content.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'Feed' };
    this._handleButtonPress = this._handleButtonPress.bind(this);
  }

  _handleButtonPress(page) {
    this.setState({page: page});
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
          <NavBar onHomeButtonPress={() => this._handleButtonPress("Feed")} 
                  onEventsButtonPress={() => this._handleButtonPress("Events")} 
                  onReservationsButtonPress={() => this._handleButtonPress("Reservations")} 
                  onOfficialButtonPress={() => this._handleButtonPress("Official")} />
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
