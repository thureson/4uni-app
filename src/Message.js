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
               <Text style={{marginLeft: 15, marginRight: 15}}>{this.props.content}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    messageContainer: {
      marginLeft: 2,
      marginRight: 2,
      height: 50,
      width: 300,
      justifyContent: 'center',
      backgroundColor: 'lightgreen',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
  });