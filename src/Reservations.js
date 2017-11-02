import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {Item} from './Item.js'

export class Reservations extends React.Component {
    render() {
        return (
            <View style={{flex: 5, backgroundColor: 'white', paddingTop: 1}}>
                {/* Header */}
                <View style={{flex: 0.107, backgroundColor: 'ghostwhite'}}>
                    <View style={styles.container}>
                        <Text style={styles.logo} >Reservations</Text>
                    </View>
                </View>

                <ScrollView>                  

                    {/* Test-stuff */}
                    <Item name="Dancing Shoes" until="21.11" reserved={true}/>
                    <Item name="Bowling Ball" until="" reserved={false}/>
                    <Item name="PS4" until="06.11" reserved={true}/>
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