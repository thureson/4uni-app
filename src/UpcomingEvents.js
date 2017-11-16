import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { UpcomingEvent } from './UpcomingEvent.js'

export class UpcomingEvents extends React.Component {
    renderRow(event) {
        return <UpcomingEvent event={event} />;
    }

    render() {
        let loading;
        if (this.props.events.length < 1) {
            loading = (
                <View style={{ paddingTop: 50 }}><ActivityIndicator size="large" /></View>
            );
        }
        return (
            <View style={{flex: 1}}>
                <View style={{height: 47, backgroundColor: 'rgba(0,0,0,0)'}} >
                    <View style={styles.container}>
                        <Text style={styles.logo} >Upcoming Events</Text>
                        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                            <Text style={{color: 'rgba(255,255,255,0.8)'}}>  ->  </Text>
                        </TouchableOpacity>
                    </View>
                </View>  
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0)', paddingTop: 1 }}>

                    {loading}
                    
                    <FlatList
                        data={this.props.events}
                        renderItem={({item}) => this.renderRow(item)}
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
        justifyContent: 'space-between',
        flexDirection: "row"
    },
    logo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'rgba(255,255,255,0.8)'
    },
    button: {
        height: 30,
        width: "auto",
        backgroundColor: 'rgba(238,255,50,0.6)',
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: "black",
        padding: 5,
        marginRight: 5
    }
});