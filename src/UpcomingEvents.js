import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { UpcomingEvent } from './UpcomingEvent.js'

export class UpcomingEvents extends React.Component {
    renderRow(event) {
        return <UpcomingEvent text={event.name} time="15:00" date="31.10" />;
    }

    render() {
        let loading;
        if (this.props.events.length < 1) {
            loading = (
                <ActivityIndicator size="large" />
            );
        }
        return (
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 1 }}>
                {/* Header */}
                <View style={{ flex: 0.107, backgroundColor: 'ghostwhite', flexDirection: "row" }}>
                    <View style={styles.container}>
                        <Text style={styles.logo} >Upcoming Events</Text>
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
                {/*
                <ScrollView>

                    <UpcomingEvent text="Official Pizza-night!" time="18:00" date="31.10" />
                    <UpcomingEvent text="Official Bowling!" time="14:00" date="04.11" />
                    <UpcomingEvent text="Official Picnic!" time="12:00" date="06.11" />

                </ScrollView>
                */}
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