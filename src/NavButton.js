import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';

export class NavButton extends React.Component {
    render() {
        return (
          <TouchableOpacity style={{flex: 1, backgroundColor: this.props.backcolor}} onPress={this.props.onButtonPress}>
            <View style={styles.buttonText}>
              <Text style={{color: 'white'}}>{this.props.texts}</Text>
            </View>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonText: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });