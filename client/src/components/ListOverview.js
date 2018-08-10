import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
// import PartsTableSettings from '/PartsTableSettings';
import PartsTable from './PartsTable';

export default class ListOverview extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Craigslist
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Used Prices
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <PartsTable foundParts={this.props.foundParts} partListSource={this.props.partListSource}/>
                new prices coming soon...
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Row>
            <Col sm="12">
              {/* <PartsTable usersList={this.props.usersList}/> */}
            </Col>
          </Row>
        </TabPane>
        </TabContent>
      </div>
    );
  }
}