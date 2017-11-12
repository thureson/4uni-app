import React from 'react';
import { View, Text } from "react-native";
import { CreateReservation } from './CreateReservation.js';
import { Reservations } from './Reservations.js';

const api = "https://my-database.herokuapp.com/api/items";

export class Reservable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createForm: false,
            items: [],
            fetching: false
        };
        this.changeView = this.changeView.bind(this);
        this.getItems = this.getItems.bind(this);
    }

    componentDidMount() {
        this.getItems();
    }

    componentWillUnmount() {
        this.state = {
            fetching: false
        }
    }

    getItems() {
        this.setState({
            fetching: true
        });
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                if (this.state.fetching) {
                    this.setState({
                        items: responseJson,
                        fetching: false
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    changeView() {
        this.setState({ createForm: !this.state.createForm });
    }

    render() {
        let pageToShow;
        this.state.createForm ?
            pageToShow = <CreateReservation onPress={this.changeView} /> :
            pageToShow = <Reservations onPress={this.changeView} items={this.state.items} update={this.getItems} />

        return (
            <View style={{ flex: 1 }}>
                {pageToShow}
            </View>
        );
    }
}