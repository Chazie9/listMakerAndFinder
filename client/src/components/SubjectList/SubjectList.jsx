import React, { Component } from 'react';
import Bucket from '../Bucket/Bucket.jsx';
import Subjects from '../Subjects/Subjects.jsx';
import TimeInterval from '../TimeInterval/TimeInterval.jsx';
import './SubjectList.css';

class SubjectList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sub: ['Interview Questions', 'Functions', 'Toy Problems', 'System Design', 'Fundamentals']
        }
    }

    render() {
        return(
            <div className="sub-container">
                <div className="subject-list-container">
                    {this.state.sub.map((subject, i) => {
                        return <Subjects key={i} subject={subject}/>
                    })}
                </div>
                <TimeInterval />
            </div>
        )
    }
}

export default SubjectList;