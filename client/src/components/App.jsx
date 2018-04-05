import React, { Component } from 'react';
import SubjectList from './SubjectList/SubjectList.jsx';
import Bucket from './Bucket/Bucket.jsx';
import Board from './Board/Board.jsx';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div>
                <Board />
                <div className="page-container">
                    <Bucket>this is where what I want goes</Bucket>
                    <SubjectList />
                </div>
            </div>
        )
    }
}

export default App;