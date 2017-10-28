import React from 'react';
import {ScrollView, Text, TextInput, View, StyleSheet} from 'react-native';

export class Chat extends React.Component {
    render() {
        return (
            <View style={{flex: 5, backgroundColor: 'steelblue'}}>
                <ScrollView>
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