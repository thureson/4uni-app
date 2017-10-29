import React from 'react';
import {View} from 'react-native';
import {Chat} from './Chat.js';
import {Events} from './Events.js';

export class Content extends React.Component {

    content() {
        switch(this.props.page) {
            case 'home':
                return <Chat />
            case 'events':
                return <Events /> 
            default:
                return <Chat />         
        }
    }

    render() {
        return this.content();
    }
}
