import React from 'react';
import {View} from 'react-native';
import {Feed} from './Feed.js';
import {Events} from './Events.js';

export class Content extends React.Component {

    content() {
        switch(this.props.page) {
            case 'home':
                return <Feed />
            case 'events':
                return <Events /> 
            default:
                return <Feed />         
        }
    }

    render() {
        return this.content();
    }
}
