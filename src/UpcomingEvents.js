import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { UpcomingEvent } from './UpcomingEvent.js'

export class UpcomingEvents extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 1 }}>
                {/* Header */}
                <View style={{ flex: 0.107, backgroundColor: 'ghostwhite', flexDirection: "row" }}>
                    <View style={styles.container}>
                        <Text style={styles.logo} >Upcoming Events</Text>
                        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                            <Text>
                                I am temp!
                            Press me!
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView>

                    {/* Test-stuff */}
                    <UpcomingEvent text="Official Pizza-night!" time="18:00" date="31.10" />
                    <UpcomingEvent text="Official Bowling!" time="14:00" date="04.11" />
                    <UpcomingEvent text="Official Picnic!" time="12:00" date="06.11" />

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
        flexDirection: "row"
    },
    logo: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    button: {
        alignSelf: "flex-end",
        height: 50,
        width: 50,
        backgroundColor: "yellow"
    }
});