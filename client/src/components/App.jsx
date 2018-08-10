import React, { Component } from 'react';
import PartList from './PartList';
import ListOverview from './ListOverview';
import Header from './Header';
import MakeAList from './MakeAList';
import ShowAllListResults from './ShowAllListResults';
import { Button } from 'reactstrap';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            partListSource: [],
            partList: {},
            usersList: {},
            showLists: false,
            partListResults: {
                letGo: {},
                craigslist: [],
                amazon: {}
            },
            letgo: ""
        }
    }

    saveListAndSearch = (list) => {
        var that = this;

        this.setState({
            usersList: list
        })

        // serach letgo
        // let letgoSearch = `/api/letgo`
        // fetch(letgoSearch)
        // .then((function(response) {
        //     var responseText = response.json();
        //     console.log('letgo was...', responseText);
        //     that.setState({ letgo: responseText})
        // }));

        

        //search ebay
        
        // list.partList.forEach((part) => {
        //     let ebaySearch = `/api/ebay/${part.prepedPartName}`
        //     console.log(ebaySearch);
        //     fetch(ebaySearch)
        //     .then((function(response) {
        //         var responseText = response.json();
        //         console.log('ebay was...', responseText);
        //     }));
        // });

        //search facebook
        // let facebookSearch = `/api/facebook`
        // fetch(facebookSearch)
        // .then((function(response) {
        //     var responseText = response.json();
        //     console.log('facebook was...', responseText);
        // }));

        //search craigslist
        list.partList.forEach((part) => {
            let testPart = part.prepedPartName
            console.log(testPart, 'the part is');
            let url = `/api/craigslist/${part.prepedPartName}`
            console.log(url, 'this is the url')
            fetch(url)
            .then(function(response) {
                var responseText = response.json();
                responseText.then(function(responseText){
                    //code you need to change
                    console.log('craigslist was...', responseText);
                    that.setState({ partListSource: responseText });
                });
            });
        });
    }

    handleSearch = (e) => {
        console.log('the app got e', e)
        var that = this;
        let url = `/api/craigslist/${e}`
        console.log(url, 'this is the url')
        fetch(url)
        .then(function(response) {
            var responseText = response.json();
            responseText.then(function(responseText){
                //code you need to change
                that.setState({ partListSource: responseText });
            });
       
        });
    }

    toggle = () => {
        this.setState({
            showLists: !this.state.showLists
        })
    }

    showAllLists = () => {
        if(this.state.showLists) {
            return <ShowAllListResults usersList={this.state.usersList}/>
        } else {
            return(
                <div className="pageContainer">
                    <Header />
                    <br />
                    <div className="bodySection">
                        {/* <PartList partListSource={this.state.partListSource} saveListAndSearch={this.saveListAndSearch} handleSearch={this.handleSearch}/> */}
                        <MakeAList partListSource={this.state.partListSource} saveListAndSearch={this.saveListAndSearch} handleSearch={this.handleSearch}/>
                    </div>
                    <br />
                    <Button onClick={(e) => this.toggle()}>See All Lists</Button>
                    <br />
                    <div className="listOverview">
                    {/* ListOverview contains the parts on the list and their prices at new and used places */}
                        LIST OVERVIEW
                        <ListOverview sampleList={this.state.usersList} partListSource={this.state.partListSource}/>
                    </div>

                </div>
            )
        }
    }

    render() {
        return(
            this.showAllLists()
        )
    }
}

export default App;


{/* <div>
<Header />
<div className="page-container">
    <div className="headerSection"> 
        <h1>Welcome to Part Finder</h1>
    </div>
    <div className="bodySection">
        PART LIST
        <PartList partListSource={this.state.partListSource} saveListAndSearch={this.saveListAndSearch} handleSearch={this.handleSearch}/>
    </div>
    <br />
    <br />
    <div className="listOverview">
        LIST OVERVIEW
        <ListOverview />
    </div>
</div>
</div> */}