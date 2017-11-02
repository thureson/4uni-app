import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

export class Official extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: 'ghostwhite', flex: 1 }}>
                {/* Header */}
                <View style={{flex: 0.107, backgroundColor: 'ghostwhite'}}>
                    <View style={styles.container}>
                        <Text style={styles.logo} >Official</Text>
                    </View>
                </View>

                <View style={styles.stuffContainer}>
                    <Text>
                        Official stuff here.
                    </Text>
                    <Text>
                        Be aware!
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    stuffContainer: {
      flex: 1,
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