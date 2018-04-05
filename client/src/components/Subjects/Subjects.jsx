import React, { Component } from 'react';
import './Subjects.css';

class Subjects extends Component {
    

    render() {
        return(
            <div className="subject-container">
    
                {this.props.subject}
            </div>
        )
    }
}

export default Subjects;