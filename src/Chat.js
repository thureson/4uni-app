import React from 'react';
import {ScrollView, Text, TextInput, View, StyleSheet} from 'react-native';

function getMessagesFromMongo() {
    return fetch()
}

export class Chat extends React.Component {
    render() {
        return (
            <View style={{flex: 5, backgroundColor: 'ghostwhite'}}>
                <ScrollView>                  
                    <View style={{alignItems: 'center'}}>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Type something here!"
                            onChangeText={(text) => this.setState({text})} />  

                        {/* Test-stuff */}
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                        <Text style={styles.messageContainer}>test</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    messageContainer: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });