import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {RootforButton} from './RootforButton.js';

export class Event extends React.Component {
    render() {
        return (
            <View style={styles.eventContainer}>
               <Text style={{flex: 2, marginLeft: 15, color: 'rgba(255,255,255,0.8)'}}>{this.props.text}</Text>
               <Text style={{flex: 2, marginLeft: 15, color: 'rgba(255,255,255,0.8)'}}>{this.props.place}</Text>
               <Text style={{flex: 1, marginLeft: 15, color: 'rgba(255,255,255,0.8)'}}>{this.props.date}</Text>
               <RootforButton id={this.props.id} roots={this.props.roots} />
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