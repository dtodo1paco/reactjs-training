import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class TabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.defaultTab
    };
  }

  toggle = (tab) => {
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
          {
            this.props.tabs.map( tab => (
              <NavItem key={tab.id}>
                <NavLink
                  className={classnames({ active: this.state.activeTab === tab.id })}
                  onClick={() => { this.toggle(tab.id); }}
                >
                  {tab.label}
                </NavLink>
              </NavItem>
            ))
          }
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {
            this.props.tabs.map( tab => (
              <TabPane tabId={''+tab.id} key={tab.id}>
                <Row>
                  <Col sm="12">
                    {tab.component}
                  </Col>
                </Row>
              </TabPane>
            ))
          }
        </TabContent>
      </div>
    );
  }
}
