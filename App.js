import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import {NavBar} from './src/NavBar.js';
import {Content} from './src/Content.js';
import {Origin} from './src/Origin.js';
import {BackgroundImage} from './src/BackgroundImage.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: '' };
    this._handleButtonPress = this._handleButtonPress.bind(this);
  }

  _handleButtonPress(page) {
    this.setState({page: page});
  }

  render() {
    return (
      <BackgroundImage>
        <View style={{flex: 1}}>
          {/* Phone's own info-spac */}
          <View style={{height: 20, backgroundColor: 'rgba(160,173,156,0.2)'}} />

          {/* Page-content */}
          <View style={{flex: 1}}>
              <Content page={this.state.page} 
                      onHomeButtonPress={() => this._handleButtonPress("Feed")} 
                      onEventsButtonPress={() => this._handleButtonPress("Events")} 
                      onReservationsButtonPress={() => this._handleButtonPress("Reservations")} 
                      onOfficialButtonPress={() => this._handleButtonPress("Official")}/>
          </View>   
          
          <View style={{height: 60}}>
            <NavBar onHomeButtonPress={() => this._handleButtonPress("Feed")} 
                    onEventsButtonPress={() => this._handleButtonPress("Events")} 
                    onReservationsButtonPress={() => this._handleButtonPress("Reservations")} 
                    onOfficialButtonPress={() => this._handleButtonPress("Official")} />
          </View>
        </View>
      </BackgroundImage>
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
