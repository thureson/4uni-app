import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {RootforButton} from './RootforButton.js';

export class UpcomingEvent extends React.Component {
    render() {
        return (
            <View style={styles.eventContainer}>
               <Text style={{flex: 2.5, marginLeft: 15, color: 'rgba(255,255,255,0.8)'}}>{this.props.event.name}</Text>
               <Text style={{flex: 2, marginLeft: 15, color: 'rgba(255,255,255,0.8)'}}>{this.props.event.place}</Text>
               <Text style={{flex: 1, marginLeft: 15, color: 'rgba(255,255,255,0.8)'}}>{this.props.event.time}</Text>
               <Text style={{flex: 1, marginLeft: 15, color: 'rgba(255,255,255,0.8)'}}>{this.props.event.date}</Text>
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
      backgroundColor: 'rgba(0,0,0,0)',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.8)',
      flexDirection: 'row',
    },
  });