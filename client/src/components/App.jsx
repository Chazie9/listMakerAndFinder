import React, { Component } from 'react';
import PartList from './PartList';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            partListSource: []
        }
    }

    handleSearch = (e) => {
        var that = this;
        let url = '/api/craigslist'
        fetch(url)
        .then(function(response) {
         var responseText = response.json();
         responseText.then(function(responseText){
            //code you need to change
            that.setState({ partListSource: responseText });
         });
        // }).then((response) => {
        //     that.setState({
        //         partListSource: response
        //     });
        });
    }


    render() {
        return(
            <div>
                <div className="page-container">
                    <div className="headerSection"> 
                        <h1>Welcome to Part Finder</h1>
                    </div>
                    <div className="bodySection">
                        <PartList partListSource={this.state.partListSource} handleSearch={this.handleSearch}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;