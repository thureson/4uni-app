import React from 'react';
import {ScrollView, Text, TextInput, View, StyleSheet, FlatList} from 'react-native';
import { Message } from './Message.js';

const api = "https://my-database.herokuapp.com/api/feed";

export class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
        this.getMessages = this.getMessages.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.getMessages();
        setInterval(this.update, 1000);
    }

    update() {
        this.getMessages();
    }

    getMessages() {
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    messages: responseJson,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderContent(message) {
        return <Message content={message.content} />;
    }

    render() {
        return (
            <View style={{flex: 5, backgroundColor: 'ghostwhite'}}>
                {/* Header */}
                <View style={{flex: 0.107, backgroundColor: 'ghostwhite'}}>
                    <View style={styles.container}>
                      <Text style={styles.logo} >Feed</Text>
                    </View>
                </View>

                <TextInput
                    style={styles.inputBoxOneRow}
                    placeholder="Title:"
                    onChangeText={(text) => this.setState({ title: text })} />

                <FlatList
                    data={this.state.messages}
                    renderItem={({item}) => this.renderContent(item)}
                    keyExtractor={(item, index) => index}
                />
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