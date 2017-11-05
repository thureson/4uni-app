import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
    }

    render() {
        return (
            <TextInput
                style={{
                    padding: 10,
                    height: this.props.height,
                    width: 250,
                    borderRadius: 3,
                    borderWidth: 0.5,
                    borderColor: "black"}}
                placeholder={this.props.placeholder}
                multiline={this.props.multiline}
                onChangeText={this.handleChange}
                onChangeText={(text) => this.setState({input: text})} />
        )
    }
}


