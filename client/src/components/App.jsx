import React, { Component } from 'react';
import SubjectList from './SubjectList/SubjectList.jsx';
import Bucket from './Bucket/Bucket.jsx';
import Board from './Board/Board.jsx';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            learningPath: []
        }

        this.addToUsersLP = this.addToUsersLP.bind(this);

    }

    addToUsersLP(subjects) {
        this.setState = {
            learningPath: subjects
        }
    }


    render() {
        return(
            <div>
                {/* <Board /> */}
                <div className="page-container">
                    <Bucket selectedSubs={this.state.learningPath} >this is where what I want goes</Bucket>
                    <SubjectList addToLP={this.addToUsersLP}/>
                </div>
            </div>
        )
    }
}

export default App;