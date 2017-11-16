import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export class Origin extends React.Component {
    render() {
        return (
            <View style={styles.content}>
                <View style={styles.menuArea}>
                    <TouchableOpacity style={styles.reserveButton}>
                        <Image source={require('../pics/reserve.png')} style={styles.reservePic}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: "#aeb0b2",
    },
    reserveButton: {
        height: 160,
        width: 160,
        backgroundColor: "white",
    },
    reservePic: {
        height: 160,
        width: 160,
    },
    menuArea: {
        paddingTop: 5,
        paddingLeft: 5,
    },
});