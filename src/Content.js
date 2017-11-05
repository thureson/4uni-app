import React from 'react';
import {View} from 'react-native';
import {Feed} from './Feed.js';
import {Events} from './Events.js';
import {Reservations} from './Reservations.js';
import {Official} from './Official.js';

import { CreateEvent } from './CreateEvent.js';

export class Content extends React.Component {

    content() {
        switch(this.props.page) {
            case 'Feed':
                return <Feed />
            case 'Events':
                return <Events /> 
            case 'Reservations':
                return <Reservations />
            case 'Official':
                {/*return <Official />*/}
                return <CreateEvent />
            default:
                return <Feed />         
        }
    }

    render() {
        return this.content();
    }
}
