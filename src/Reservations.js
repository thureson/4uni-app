import React from 'react';
import { ScrollView, Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Item } from './Item.js'

export class Reservations extends React.Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(item) {
        return 
            <Item 
                name={item.name}
                isReserved={item.isReserved} />;
    }

    render() {
        return (
            <View style={{flex: 5, backgroundColor: 'white', paddingTop: 1}}>
                {/* Header */}
                <View style={{flex: 0.107, backgroundColor: 'ghostwhite', flexDirection: "row"}}>
                    <View style={styles.container}>
                        <Text style={styles.logo} >Reservations</Text>
                        
                        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                            <Text>change</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={this.props.items}
                    renderItem={({item}) => this.renderRow(item)}
                    keyExtractor={(item, index) => index}
                />
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
      button: {
        height: 30,
        width: "auto",
        backgroundColor: "yellow",
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: "black",
        padding: 5,
        marginRight: 5
    },
  });