import React, { Component } from 'react';

class TimeInterval extends Component {

    render() {
        return (
            <div>
                Enter Time Interval: 
                <input></input>
                <button onClick={this.props.onClick}>Submit</button>
            </div>
        )   
    }
}

export default TimeInterval;