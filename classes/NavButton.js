import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';

export class NavButton extends React.Component {
    render() {
        return (
          <TouchableOpacity style={{flex: 1, backgroundColor: this.props.backcolor}} onPress={this.props.onButtonPress}>
            <View style={styles.buttonContainer}>
              <Text>{this.props.texts}</Text>
            </View>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });