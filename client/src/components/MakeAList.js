import React, { Component } from 'react';
import AddPart from './AddPart';
import Part from './Part';
import PartListSettings from './PartListSettings';
import SavedParts from './SavedParts';
import ListOverview from './ListOverview';
import './PartList';

import { Button } from 'reactstrap';

class MakeAList extends Component {

    constructor(props) {
        super (props)
        
        this.state = {
            title: "",
            tutorial: "",
            partName: "",
            prepedPartName: "",
            item1: '',
            item2: '',
            item3: '',
            partList: [],
            partListTitle: '',
            partListAuthor: ''
            //partListSource: []

        }
    }

    handleTheSearch = (e) => {
        this.props.handleSearch(this.state.prepedPartName);
    }

    handleSaveListAndSearch = (e) => {
        let listToSave = {
            listTitle: this.state.partListTitle,
            listAuthor: this.state.partListAuthor,
            partList: this.state.partList
        }
        this.props.saveListAndSearch(listToSave);
    }


    addPartToList = () => {
        //let newList = this.state.partList.push(this.state.partName)
        //console.log('this sis hthe new list', newList)
        let newPartList = this.state.partList
        newPartList.push({partName: this.state.partName, prepedPartName: this.state.prepedPartName});

        if(this.state.item1 === '') {
            this.setState({
                item1: this.state.partName,
                partName: '',
                partList: newPartList
            })
        } else if(this.state.item2 === '') {
            this.setState({
                item2: this.state.partName,
                partName: '',
                partList: newPartList
            })
        } else if( this.state.item3 === '') {
            this.setState({
                item3: this.state.partName,
                partName: '',
                partList: newPartList
            })  
        } else {
            alert('Please upgrade your account to save more parts');
        }
    }

    handleTitle = (e) => {
        this.setState({
            title: e.target.value,
        })
    }

    handleTutorial = (e) => {
        this.setState({
            tutorial: e.target.value,
        })
    }

    handleChange = (e) => {
        console.log(e);
        let prepVal = e.target.value.split(' ').join('+')
        this.setState({
            partName: e.target.value,
            prepedPartName: prepVal
        })
    }

    render() {
        // const theList = this.state.partList.map((item) => { return <li>{item}</li>})
        return (
            <div>
                <div className="inputTitle">
                    Title:
                    <input value={this.state.inputTitle} onChange={(e) => this.handleTitle(e)} />
                </div>
                <div className="inputTutorial">
                    Link to tutorial: 
                    <input value={this.state.inputTutorial} onChange={(e) => this.handleTutorial(e)} />
                </div>
                <br />
                <div className="inputParts">
                    Please enter the parts required to complete the tutorial:
                    <br />
                    <input value={this.state.partName} onChange={(e) => this.handleChange(e)} />
                    {/* <Button onClick={() => this.handleTheSearch()}>Search for part</Button> */}
                    <Button onClick={() => this.addPartToList()}>Add part to list</Button>
                </div>

                <div className="savedListOfParts">
                   <li>{this.state.item1}</li>
                   <li>{this.state.item2}</li>
                   <li>{this.state.item3}</li>
                   <Button onClick={() => this.handleSaveListAndSearch()}>Save list and Search</Button>
                </div>
            </div>
        )
    }
}

export default MakeAList;