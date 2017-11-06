import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export class Message extends React.Component {
    render() {
        return (
            <View style={styles.messageContainer}>
               <Text style={{marginLeft: 15, marginRight: 15}}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    messageContainer: {
      marginLeft: 2,
      marginRight: 2,
      height: 50,
      justifyContent: 'center',
      backgroundColor: 'lightgreen',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
  });