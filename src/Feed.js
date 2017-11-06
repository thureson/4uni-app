import React from 'react';
import {ScrollView, Text, TextInput, View, StyleSheet} from 'react-native';
import { Message } from './Message.js';

export class Feed extends React.Component {
    render() {
        return (
            <View style={{flex: 5, backgroundColor: 'ghostwhite'}}>
                {/* Header */}
                <View style={{flex: 0.107, backgroundColor: 'ghostwhite'}}>
                    <View style={styles.container}>
                      <Text style={styles.logo} >Feed</Text>
                    </View>
                </View>

                <ScrollView>                  
                    <View style={{alignItems: 'center'}}>
                        <TextInput
                            style={styles.inputBoxOneRow}
                            placeholder="Title:"
                            onChangeText={(text) => this.setState({ title: text })} />

                        {/* Test-stuff */}
                        <Message text="I ma test." />
                        <Message text="I ma test." />
                        <Message text="I ma test." />
                        <Message text="I ma test." />
                        <Message text="I ma test." />
                        <Message text="I ma test." />
                        <Message text="I ma test." />
                        <Message text="I ma test." />
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        fontSize: 22,
        fontWeight: 'bold',
      },
      inputBoxOneRow: {
        padding: 10,
        height: 50,
        width: 250,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: "black",
    },
  });