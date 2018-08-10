import React, { Component } from 'react';
import './PartsTableSettings.css';

class PartsTableSettings extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            areas: ['bakersfield', 'chico', 'fresno', 'gold country', 'hanford', 'humboldt', 'inland empire', 'klamath falls', 'las vegas', 
                'los angeles', 'medford', 'mendocino co', 'merced', 'modesto', 'monterey', 'orange co', 'palm springs', 'redding', 'reno', 
                'roseburg', 'sacramento', 'san luis obispo', 'santa barbara', 'santa maria', 'siskiyou co', 'stockton', 'susanville', 'ventura', 
                'visalia-tulare', 'yuba-sutter']
        }
    }

    render () {
        return (
            <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                    {this.state.areas.forEach((item) => {
                        return <a href="#">{item}</a>
                    })}
                    
                </div>
          </div>
        )
    }
}

export default PartsTableSettings;

