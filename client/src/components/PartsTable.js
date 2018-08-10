import React from 'react';
import { Table } from 'reactstrap';


export default class PartsTable extends React.Component {

  constructor(props) {
    super(props) 

    this.state = {
      tableHeading: [],
      parts: []
    }
  }


  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Part Name</th>
            <th>New Price</th>
            <th>Craigslist Price</th>
            <th>Facebook Price</th>
            {/* <th>Table heading</th>
            <th>Table heading</th> */}
          </tr>
        </thead>
        <tbody>
            <tr>
                {/* <th scope="row">{i}</th> */}
                {/* <td>{item.title}</td> */}
                {/* <td>{item.newPrice}</td>
                <td>{item.craigsPrice}</td>
                <td>{item.facebookPrice}</td> */}
            </tr>
          {this.props.partListSource.map((item, i) => {
            return (
              <tr>
                <th scope="row">{i}</th>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.link}</td>
                
            </tr>
            )
          })}
        </tbody>
      </Table>
    );
  }
}