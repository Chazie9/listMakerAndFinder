import React, { Component } from 'react';

class SavedParts extends Component {

    constructor(props){
        super(props)

        this.state = {}
    }

    render() {
        
      return (
        <ul>{items}</ul>
      );
        // return (
        //     <div>
        //         {this.props.parts.map((item) =>
        //             <div>{item}</div>
        //         )}
        //     </div>
        // )
    }
}


export default SavedParts;