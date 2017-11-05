import React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native';
import { Event } from './Event.js'

export class CreateEvent extends React.Component {
    render() {
        return (
            <View>

                <View style={styles.container}>
                    {/* 'title' is 'name' in db */}
                    <TextInput
                        style={{height: 40}}
                        placeholder="Title:"
                        onChangeText={(text) => this.setState({text})} />

                    <TextInput
                        style={{height: 40}}
                        placeholder="Description:"
                        onChangeText={(text) => this.setState({text})} />

                    <TextInput
                        style={{height: 40}}
                        placeholder="Place:"
                        onChangeText={(text) => this.setState({text})} />

                    <TextInput
                        style={{height: 40}}
                        placeholder="Date:"
                        onChangeText={(text) => this.setState({text})} />

                    <TextInput
                        style={{height: 40}}
                        placeholder="Time:"
                        onChangeText={(text) => this.setState({text})} />

                    <TextInput
                        style={{height: 40}}
                        placeholder="Budjet:"
                        onChangeText={(text) => this.setState({text})} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    logo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10
    },
});