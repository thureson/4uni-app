import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {Event} from './Event.js'

export class SuggestedEvents extends React.Component {
    render() {
        return (
            <View style={{flex: 5, backgroundColor: 'white', paddingTop: 1}}>
                {/* Header */}
                <View style={{flex: 0.107, backgroundColor: 'ghostwhite'}}>
                    <View style={styles.container}>
                      <Text style={styles.logo} >Suggested Events</Text>
                    </View>
                </View>
                
                <ScrollView>                  

                    {/* Test-stuff */}
                    <Event text="Pizza-night" time="18:00" date="31.10"/>
                    <Event text="Bowling!" time="14:00" date="04.11"/>
                    <Event text="A Picnic?" time="12:00" date="06.11"/>
                    <Event text="Pizza-night" time="18:00" date="31.10"/>
                    <Event text="Bowling!" time="14:00" date="04.11"/>
                    <Event text="A Picnic?" time="12:00" date="06.11"/>
                    <Event text="Pizza-night" time="18:00" date="31.10"/>
                    <Event text="Bowling!" time="14:00" date="04.11"/>
                    <Event text="A Picnic?" time="12:00" date="06.11"/>
                    <Event text="Pizza-night" time="18:00" date="31.10"/>
                    <Event text="Bowling!" time="14:00" date="04.11"/>
                    <Event text="A Picnic?" time="12:00" date="06.11"/>
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
      },
      logo: {
        fontSize: 22,
        fontWeight: 'bold',
      },
  });