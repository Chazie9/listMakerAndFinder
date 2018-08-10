import React, { Component } from 'react';
import ListResult from './ListResult';
import './ShowAllListResults.css';

class ShowAllListResults extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            allListResults: []
        }
    }

    componentDidMount() {

        var that = this;
        let url = `/allLists`
        
        fetch(url)
        .then(function(response) {
            console.log(response, '1')
            var responseText = response.json();
            console.log(responseText, '2');
            responseText.then(function(responseText){
                //code you need to change
                that.setState({ allListResults: responseText });
            });
        });
    }

    haveResults = () => {
        if(this.state.allListResults.length > 0) {
            return (
                <div className="allListResults">
                    {this.state.allListResults.map((item, i) => {
                        return <ListResult className="theResultsOfAll" key={i} result={item}/>
                    })}
                </div>
            )
        } else {
            return <div>Results are on their way</div>
        }
    }

    render() {
        return (
            this.haveResults()
        );
    }
}

export default ShowAllListResults;