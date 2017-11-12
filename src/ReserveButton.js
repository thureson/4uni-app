import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export class ReserveButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { reserved: this.props.isReserved, item: this.props.item };
        this.handleReserve = this.handleReserve.bind(this);
    }

    handleReserve() {
        this.props.onPress(this.state.item);
    }

    render() {
        let reserveState = this.state.reserved ? styles.reserved : styles.available;

        return (
            <TouchableOpacity style={reserveState} onPress={this.handleReserve}>
                <Text style={{ fontWeight: 'bold' }}>Reserve</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    available: {
      marginTop: 6,
      marginBottom: 6,
      marginRight: 6,
      backgroundColor: 'mediumseagreen',
      height: 38,
      width: 76,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    reserved: {
        marginTop: 6,
        marginBottom: 6,
        marginRight: 6,
        backgroundColor: 'red',
        height: 38,
        width: 76,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
  });