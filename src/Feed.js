import React from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet, FlatList, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native';
import { Message } from './Message.js';
import { BackgroundImage } from './BackgroundImage.js';

const api = "https://my-database.herokuapp.com/api/feed";

export class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialLoad: true,
            fetching: false,
            messages: [],
            newMessage: ''
        };
        this.getMessages = this.getMessages.bind(this);
        this.update = this.update.bind(this);
        this.handleNewMessage = this.handleNewMessage.bind(this);
    }

    handleNewMessage() {
        fetch("https://my-database.herokuapp.com/api/feed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: this.state.newMessage,
            })
        }).catch((error) => {
            console.log(error);
        });
        Keyboard.dismiss();
        this.textInput.clear();
        this.setState({ newMessage: '' });
    }

    componentDidMount() {
        this.getMessages();
        this.state.intervalId = setInterval(this.update, 500);
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
        this.state = {
            fetching: false
        };
    }

    update() {
        this.getMessages();
    }

    getMessages() {
        this.setState({
            fetching: true
        });
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                if (this.state.fetching) {
                    this.setState({
                        messages: responseJson,
                        initialLoad: false,
                        fetching: false
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderContent(message) {
        return <Message style={{paddingTop: 3}} content={message.content} />;
    }

    render() {
        let loading;
        if (this.state.initialLoad) {
            loading = <View style={{ paddingTop: 50 }}><ActivityIndicator size="large" /></View>
        }
        return (
            <View style={{flex: 1}}>
                <View style={{height: 47, backgroundColor: 'rgba(0,0,0,0)'}} >
                    <View style={styles.container}>
                        <Text style={styles.logo} >Feed</Text>
                    </View>
                </View>  
                <View style={{ flex: 1, /*backgroundColor: 'ghostwhite',*/ alignItems: 'center', paddingTop: 5 }}>
                    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                        <TextInput
                            ref={input => { this.textInput = input }}
                            style={styles.inputBoxOneRow}
                            placeholder="New Message:"
                            onChangeText={(text) => this.setState({ newMessage: text })} />

                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={this.handleNewMessage}>

                            <Text style={styles.submitText}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {loading}
                    {this.state.messages.length === 0 && !this.state.initialLoad && <Text style={{ paddingTop: 55, backgroundColor: 'rgba(0,0,0,0)', color: 'white' }}>No messages</Text>}
                    <FlatList
                        style={{paddingTop: 3}}
                        data={this.state.messages}
                        renderItem={({item}) => this.renderContent(item)}
                        keyExtractor={(item, index) => index}
                    />
                </View>
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
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
    },
    inputBoxOneRow: {
        padding: 10,
        height: 50,
        width: 220,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: "black",
        backgroundColor: "rgba(255,255,255,0.8)",
    },
    submitButton: {
        height: 50,
        width: 80,
        backgroundColor: 'rgba(55,91,44,0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        borderWidth: 0.5,
    },
    submitText: {
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.8)'
    },
});