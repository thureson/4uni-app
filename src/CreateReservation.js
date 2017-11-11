import React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Event } from './Event.js';

export class CreateReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        fetch("https://my-database.herokuapp.com/api/reservations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name
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
                        <TextInput
                            style={styles.inputBoxOneRow}
                            placeholder="Name:"
                            onChangeText={(text) => this.setState({ name: text })} />

                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={this.handleSubmit}>

                            <Text style={styles.submitText}>
                                Submit
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.goBackButton}
                            onPress={this.props.onPress}>
                            <Text style={styles.submitText}>
                                Go Back
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
    goBackButton: {
        height: 40,
        width: 80,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    submitText: {
        fontWeight: 'bold',
    },
});