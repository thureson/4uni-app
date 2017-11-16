import React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Event } from './Event.js';

export class CreateReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sender: '',
            email: '',
            apartment: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGoback = this.handleGoback.bind(this);
    }

    handleSubmit() {
        fetch("https://my-database.herokuapp.com/api/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sender: this.state.sender,
                email: this.state.email,
                apartment: this.state.apartment,
                _id: this.props.item._id,
                item: this.props.item.name
            })
        }).catch((error) => {
            console.log(error);
        });
        this.handleGoback();
    }

    handleGoback() {
        this.props.onPress([]);
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.inputAreaContainer} >
                        <View style={{paddingTop: 15}} />
                        <TextInput
                            style={styles.inputBoxOneRow}
                            placeholder="Name:"
                            onChangeText={(text) => this.setState({ sender: text })} />

                        <TextInput
                            style={styles.inputBoxOneRow}
                            placeholder="email:"
                            onChangeText={(text) => this.setState({ email: text })} />

                        <TextInput
                            style={styles.inputBoxOneRow}
                            placeholder="Apartment:"
                            onChangeText={(text) => this.setState({ apartment: text })} />

                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={this.handleSubmit}>

                            <Text style={styles.submitText}>
                                Submit
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.goBackButton}
                            onPress={this.handleGoback}>
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
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    inputBoxMultiRow: {
        lineHeight: 20,
        padding: 10,
        height: 120,
        width: 250,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: "black",
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    submitButton: {
        height: 40,
        width: 80,
        backgroundColor: 'rgba(55,91,44,0.8)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    goBackButton: {
        height: 40,
        width: 80,
        backgroundColor: 'rgba(136, 145, 133, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    submitText: {
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.8)'
    },
});