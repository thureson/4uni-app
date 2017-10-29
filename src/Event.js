import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {RootforButton} from './RootforButton.js';

export class Event extends React.Component {
    render() {
        return (
            <View style={styles.eventContainer}>
               <Text style={{flex: 5, marginLeft: 15}}>{this.props.text}</Text>
               <RootforButton />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    eventContainer: {
      marginLeft: 2,
      marginRight: 2,
      height: 50,
      alignItems: 'center',
      flex: 1, 
      backgroundColor: 'ghostwhite',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      flexDirection: 'row',
    },
  });