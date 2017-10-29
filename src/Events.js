import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {Event} from './Event.js'

export class Events extends React.Component {
    render() {
        return (
            <View style={{flex: 5, backgroundColor: 'white'}}>
                <ScrollView>                  

                    {/* Test-stuff */}
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>
                    <Event text="Pizza-night klo 18, 31.10.2017"/>

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
  });