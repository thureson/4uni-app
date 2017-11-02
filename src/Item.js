import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ReserveButton} from './ReserveButton.js';

export class Item extends React.Component {
    render() {
        return (
            <View style={styles.eventContainer}>
               <Text style={{flex: 3, marginLeft: 15}}>{this.props.name}</Text>
               <Text style={{flex: 1, marginLeft: 15}}>{this.props.until}</Text>
               <Text style={{flex: 1, marginLeft: 15}}></Text>
               <ReserveButton reserved={this.props.reserved} />
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