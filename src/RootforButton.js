import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export class RootforButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { roots: 0 };
        this.increase = this.increase.bind(this);
    }

    increase() {
        let root = this.state.roots + 1;
        this.setState({ roots: root});
    }

    render() {
        return (
            <TouchableOpacity style={styles.rootFor} onPress={this.increase}>
                <Text>{this.state.roots}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    rootFor: {
      marginTop: 6,
      marginBottom: 6,
      marginRight: 6,
      backgroundColor: 'mediumseagreen',
      height: 38,
      width: 38,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });