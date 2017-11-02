import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

export class Official extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Official stuff here.
                </Text>
                <Text>
                    Be aware!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'ghostwhite',
    },
  });