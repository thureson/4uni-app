import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Event } from './Event.js'

export class SuggestedEvents extends React.Component {
    renderRow(event) {
        return <Event text={event.name}
                      time={event.time}
                      date={event.date}
                      id={event._id}
                      roots={event.roots}
                      />;
    }

    render() {
        let loading;
        if (this.props.events.length < 1) {
            loading = (
                <ActivityIndicator size="large" />
            );
        }

        return (
            <View style={{ flex: 5, backgroundColor: 'white', paddingTop: 1 }}>
                {/* Header */}
                <View style={{ flex: 0.107, backgroundColor: 'ghostwhite' }}>
                    <View style={styles.container}>
                        <Text style={styles.logo} >Suggested Events</Text>
                        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                            <Text>change</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {loading}

                <FlatList
                    data={this.props.events}
                    renderItem={({item}) => this.renderRow(item)}
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
        justifyContent: 'space-between',
        flexDirection: "row"
    },
    logo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10
    },
    button: {
        height: 30,
        width: "auto",
        backgroundColor: "yellow",
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: "black",
        padding: 5,
        marginRight: 5
    }
});