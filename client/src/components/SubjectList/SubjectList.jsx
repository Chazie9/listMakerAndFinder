import React, { Component } from 'react';
import Bucket from '../Bucket/Bucket.jsx';
import Subjects from '../Subjects/Subjects.jsx';
import TimeInterval from '../TimeInterval/TimeInterval.jsx';
import './SubjectList.css';

class SubjectList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sub: ['Interview Questions', 'Functions', 'Toy Problems', 'System Design', 'Fundamentals'],
            isChecked: [],
            selected: [],
            currentlySelected: {}
        }

        this.addToLearningPlan = this.addToLearningPlan.bind(this);
        this.setTime = this.setTime.bind(this);
        this.selectedSubject = this.selectedSubject.bind(this);
    }

    selectedSubject(subject, i){

        if(!this.state.currentlySelected[subject]) {
            let checked = this.state.isChecked;
            checked.push(subject);
            
            let cSelected = this.state.currentlySelected;
            cSelected[subject] = checked.length - 1;
            this.setState = {
                isChecked: checked,
                currentlySelected: cSelected
            }
            console.log('subjects currently selected', checked);
        } else {
            let cSelected = this.state.currentlySelected;
            let checked = this.state.isChecked;
            checked.slice(cSelected[subject]);
            cSelected[subject] = null;
            
            
            this.setState = {
                isChecked: checked,
                currentlySelected: cSelected
            }
            console.log('subjects currently selected in else', checked);
        }
    }

    addToLearningPlan() {
        
        let allSelected = this.state.selected.concat(this.state.isChecked)
        console.log('adding something', allSelected);
        // this.state = {
        //     selected: all
        // }
        this.props.addToLP(allSelected)
    }

    setTime() {
        console.log('setting time interval');
    }

    render() {
        return(
            <div className="sub-container">
                <div className="subject-list-container">
                    {this.state.sub.map((subject, i) => {
                        return (
                            <div className="subjects-contained" key={i}>
                                <input onChange={() => this.selectedSubject(subject, i)} type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" />
                                <Subjects key={i} subject={subject}/>
                            </div>
                        );
                    })}
                    <button onClick={this.addToLearningPlan}>add to subjects</button>
                </div>
                <TimeInterval onClick={this.setTime}/>
            </div>
        )
    }
}

export default SubjectList;