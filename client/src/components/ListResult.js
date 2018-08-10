import React, { Component } from 'react';
import PartsTable from './PartsTable';
import './ListResult.css';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

class ListResult extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // link: 'https://www.youtube.com/embed/j094DDUGJSY'
        }
    }


    render() {
        return (
            <div className="resultDiv">
                <iframe width="560" height="315" src={this.props.result.link} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            
                {/* <CardImg className="resultImg" src="https://www.youtube.com/embed/j094DDUGJSY" alt="Card image cap" /> */}
                <Card className="resultCard">
                    <CardBody className="resultBody">
                        <CardTitle>{this.props.result.title}</CardTitle>
                        <CardText>
                            <PartsTable />
                        </CardText>
                        
                        <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default ListResult;