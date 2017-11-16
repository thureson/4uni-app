import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text } from 'react-native';

export class Origin extends React.Component {
    render() {
        var d = Dimensions.get("screen");
        return (
            <View style={{flex: 1, backgroundColor: "rgba(0,0,0,0)"}}>
                <View style={{height: 47}} >
                    <Image
                        style={{flex:1, height: undefined, width: undefined, backgroundColor: 'rgba(37,40,36,0.9)'}}
                        source={require('../pics/header.png')}
                        resizeMode="stretch"
                        />
                    
                </View>  
                <View style={styles.content}>
                    <View style={styles.menuArea}>
                        <View style={styles.menuRow}>
                            <TouchableOpacity style={styles.reserveButton} onPress={this.props.onHomeButtonPress}>
                                <Image
                                    style={{flex:1, height: undefined, width: undefined}}
                                    source={require('../pics/reserve2.png')}
                                    resizeMode="stretch"
                                    opacity={0.7}
                                    />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.reserveButton} onPress={this.props.onReservationsButtonPress}>
                                <Image
                                    style={{flex:1, height: undefined, width: undefined}}
                                    source={require('../pics/varaa2.png')}
                                    resizeMode="stretch"
                                    opacity={0.7}
                                    />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.menuRow}>
                            <TouchableOpacity style={styles.reserveButton} >
                                <Image
                                    style={{flex:1, height: undefined, width: undefined}}
                                    source={require('../pics/prof2.png')}
                                    resizeMode="stretch"
                                    opacity={0.7}
                                    />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.reserveButton} onPress={this.props.onEventsButtonPress}>
                                <Image
                                    style={{flex:1, height: undefined, width: undefined}}
                                    source={require('../pics/event2.png')}
                                    resizeMode="stretch"
                                    opacity={0.7}
                                    />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.menuRow}>
                            <TouchableOpacity style={styles.offialButton} onPress={this.props.onOfficialButtonPress}>
                                <Image
                                    style={{flex: 1, height: undefined, width: d.width-6 }}
                                    source={require('../pics/official.png')}
                                    resizeMode="stretch"
                                    opacity={0.7}
                                    />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center",
    },
    reserveButton: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    officialButton: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    menuArea: {
        paddingLeft: 3,
        paddingRight: 3,
    },
    menuRow: {
        flex: 1,
        flexDirection: "row",
    },
});