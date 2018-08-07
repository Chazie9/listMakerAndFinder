import React, { Component } from 'react';
import AddPart from './AddPart';
import Part from './Part';

class PartList extends Component {

    constructor(props) {
        super (props)
        
        this.state = {
            partName: "",
            //partListSource: []
        }
    }


    handleTheSearch = (e) => {


        this.props.handleSearch();

        // var that = this;
        // let url = '/api/craigslist'
        // fetch(url)
        // .then(function(response) {
        //  var responseText = response.json();
        //  responseText.then(function(responseText){
        //     //code you need to change
        //     that.setState({ partListSource: responseText });
        //  });
        
        //});
    }

    handleChange = (e) => {
        this.setState({
            partName: e.input
        })
    }

    render() {
        return (
            <div>
                <div className="inputTitle">
                    Title:
                    <input />
                </div>
                <div className="inputParts">
                    Please enter the part your looking for below:
                    {/* <input onChange={(e) => this.handleChange(e)} /> */}
                    <button onClick={() => this.handleTheSearch()}>Search for part</button>
                </div>
                <div className="results">
                    {this.props.partListSource.map(function(item,i) { 
                        return <div key={i}>{item.title}</div>
                    })}
                    {/* {this.props.partListSource.forEach((item, i) => {
                        return <div className="result">{item.title}hihihi{item.price}</div>
                    })} */}

                    <Part foundParts={this.props.partListSource} />
                </div>
            </div>
        )
    }
}

export default PartList;