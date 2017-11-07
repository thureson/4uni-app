import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

export class RootforButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: true
        };
        this.update = this.update.bind(this);
        this.increase = this.increase.bind(this);
    }

    componentDidMount() {
        this.update();
    }

    componentWillUnmount() {
        this.state = {
            fetching: false
        }
    }

    update() {
        const api = "https://my-database.herokuapp.com/api/events/" + this.props.id;
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (this.state.fetching) {
                    this.setState({
                        fetching: false,
                        roots: responseJson.roots
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
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
        let loading;
        if (this.state.fetching) {
            loading = (
                <View style={styles.loading}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <TouchableOpacity style={styles.rootFor} onPress={this.increase}>
                {loading}
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
    loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});