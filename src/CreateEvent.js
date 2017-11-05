import React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Event } from './Event.js';
import { InputField } from './Forms/InputField.js';

export class CreateEvent extends React.Component {
    render() {
        return (
            <View>

                <View style={styles.container}>
                    <View style={styles.inputAreaContainer} >
                        {/* 'title' is 'name' in db */}
                        <InputField 
                            placeholder="Title:"
                            height={40}
                            multiline={false} />

                        <InputField 
                            placeholder="Description:"
                            height={120}
                            multiline={true} />    

                        <TextInput
                            style={styles.inputBox}
                            placeholder="Description:"
                            onChangeText={(text) => this.setState({text})} />

                        <TextInput
                            style={styles.inputBox}
                            placeholder="Place:"
                            onChangeText={(text) => this.setState({text})} />

                        <TextInput
                            style={styles.inputBox}
                            placeholder="Date:"
                            onChangeText={(text) => this.setState({text})} />

                        <TextInput
                            style={styles.inputBox}
                            placeholder="Time:"
                            onChangeText={(text) => this.setState({text})} />

                        <TextInput
                            style={styles.inputBox}
                            placeholder="Budjet:"
                            onChangeText={(text) => this.setState({text})} />

                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitText}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputAreaContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10
    },
    inputBox: {
        padding: 10,
        height: 60,
        width: 250,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: "black",
    },
    submitButton: {
        height: 40,
        width: 80,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',      
    },
    submitText: {
        fontWeight: 'bold',
    },
});