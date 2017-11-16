import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ReserveButton} from './ReserveButton.js';

export class Item extends React.Component {
    render() {
        return (
            <View style={styles.eventContainer}>
               <Text style={{flex: 3, marginLeft: 15, color: 'rgba(255,255,255,0.9)'}}>{this.props.name}</Text>
               <Text style={{flex: 1, marginLeft: 15}}></Text>
               <ReserveButton isReserved={this.props.reserved} onPress={this.props.onPress} item={this.props.item} />
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
      borderColor: 'rgba(255,255,255,0.9)',
      flexDirection: 'row',
    },
  });