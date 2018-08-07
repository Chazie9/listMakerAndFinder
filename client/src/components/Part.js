import React, { Component } from 'react';

class Part extends Component {

    render() {
        return (
            <div>
                {this.props.foundParts.forEach((item, i) => {
                    return <div>{item.title} hi hi {item.price}</div>
                })}
            </div>
        )
    }
}

export default Part;