import React from 'react';
import {ScrollView, Text, TextInput, View, StyleSheet} from 'react-native';

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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        fontSize: 22,
        fontWeight: 'bold',
      },
  });