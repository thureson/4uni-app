import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, LayoutAnimation, UIManager} from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export class Message extends React.Component {
    componentWillUnmount() {
        //LayoutAnimation.spring();
    }

    render() {
        return (
            <View style={styles.messageContainer}>
               <Text style={{marginLeft: 15, marginRight: 15, color: 'rgba(255,255,255,0.8)'}}>{this.props.content}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    messageContainer: {
      marginLeft: 2,
      marginRight: 2,
      height: 60,
      width: 300,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0)',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.8)',
    },
  });