import React from 'react';
import {SuggestedEvents} from './SuggestedEvents.js';
import {UpcomingEvents} from './UpcomingEvents.js';

export class Events extends React.Component {   
    constructor(props) {
        super(props);
        this.state = { upcoming: true };
        this.changeView = this.changeView.bind(this);
    }

    changeView() {
        this.setState({ upcoming: !this.state.upcoming });
    }

    render() {
        return this.state.upcoming ? <UpcomingEvents changeView={this.changeView} /> : <SuggestedEvents />
    }
}