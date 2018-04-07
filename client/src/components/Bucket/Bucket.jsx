import React, { Component } from 'react';
import './Bucket.css';
import Subjects from '../Subjects/Subjects.jsx';

class Bucket extends Component {
    constructor(props) {
        super(props)


    }


    render() {
        return (
            <div className="outline">
                {this.props.selectedSubs.map((sub) => {
                    
                })}
            </div>

        )
    }
}

export default Bucket;