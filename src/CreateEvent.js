import React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Event } from './Event.js';
import { InputField } from './Forms/InputField.js';

export class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', description: '', place: '', date: '', time: '', budjet: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        fetch("https://my-database.herokuapp.com/api/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.title,
                description: this.state.description,
                place: this.state.place,
                date: this.state.date,
                time: this.state.time,
                budjet: Number(this.state.budjet)
            })
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <View>

                <View style={styles.container}>
                    <View style={styles.inputAreaContainer} >
                        {/* 'title' is 'name' in db */}  
                        <TextInput
                            style={styles.inputBoxOneRow}
                            placeholder="Title:"
                            onChangeText={(text) => this.setState({title: text})} />

                        <TextInput
                            style={styles.inputBoxMultiRow}
                            placeholder="Description:"
                            multiline
                            onChangeText={(text) => this.setState({description: text})} />

                        <TextInput
                            style={styles.inputBoxOneRow}
                            placeholder="Place:"
                            onChangeText={(text) => this.setState({place: text})} />

                        <TextInput
                            style={styles.inputBoxOneRow}
                            placeholder="Date:"
                            onChangeText={(text) => this.setState({date: text})} />

                        <TextInput
                            style={styles.inputBoxOneRow}
                            placeholder="Time:"
                            onChangeText={(text) => this.setState({time: text})} />

                        <TextInput
                            style={styles.inputBoxOneRow}
                            placeholder="Budjet:"
                            onChangeText={(text) => this.setState({budjet: text})} />

                        <TouchableOpacity 
                            style={styles.submitButton}
                            onPress={this.handleSubmit}>
                            
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
    inputBoxOneRow: {
        padding: 10,
        height: 50,
        width: 250,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: "black",
    },
    inputBoxMultiRow: {
        lineHeight: 20,
        padding: 10,
        height: 120,
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