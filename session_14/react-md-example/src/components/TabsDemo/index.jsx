import React from 'react';
import PropTypes from 'prop-types';
import { TabsContainer, Tabs, Tab } from 'react-md';

const TabsDemo = (props) => (
  <TabsContainer panelClassName="md-grid" colored>
    <Tabs tabId="simple-tab" mobile={props.mobile}>
      {
        props.tabs.map( tab => (
          <Tab
            label={tab.label}
            key={tab.label}
          >
            <div style={{height: '100vh'}}>
              {tab.component}
            </div>
          </Tab>
        ))
      }
    </Tabs>
  </TabsContainer>
);

TabsDemo.propTypes = {
  mobile: PropTypes.bool.isRequired,
};
TabsDemo.defaultProps = {
  mobile: false,
}
export default TabsDemo;

