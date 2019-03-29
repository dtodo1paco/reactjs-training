import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

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
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.toggle(key)}
        >
        {
            this.props.tabs.map( tab => (
              <Tab eventKey={tab.id} title={tab.label}>
                {tab.component}
              </Tab>
            ))
          }
        </Tabs>
      </div>
    );
  }
}
