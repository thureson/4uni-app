import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export class RootforButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { roots: 0 };
        this.increase = this.increase.bind(this);
    }

    componentDidMount() {
        this.state.roots = this.props.roots;
    }

    increase() {
        let root = this.state.roots + 1;
        this.setState({ roots: root });
        fetch("https://my-database.herokuapp.com/api/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id: this.props.id,
                roots: root
            })
        }).catch((error) => {
            console.log(error);
        });
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