import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export class BackgroundImage extends React.Component {
    render() {
        return (
            <Image source={require('../pics/bg.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
});
