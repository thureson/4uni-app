import React from 'react';
import { ScrollView, Text, View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Item } from './Item.js';
import { BackgroundImage } from './BackgroundImage.js';

export class Reservations extends React.Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(item) {
        return <Item name={item.name} isReserved={item.isReserved} onPress={this.props.onPress} item={item} />;
    }

    render() {
        let loading;
        if (this.props.items.length < 1) {
            loading = (
                <View style={{ paddingTop: 50 }}><ActivityIndicator size="large" /></View>
            );
        }
        return (
            <View style={{flex: 1}}>
                <View style={{height: 47, backgroundColor: 'rgba(0,0,0,0)'}} >
                    <View style={styles.container}>
                        <Text style={styles.logo} >Reservations</Text>
                    </View>
                </View>  
                <View style={{flex: 5, backgroundColor: 'rgba(0,0,0,0)', paddingTop: 1}}>

                    {loading}
                    <FlatList
                        data={this.props.items}
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
        justifyContent: 'center',
        flexDirection: "row"
      },
      logo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.8)'
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