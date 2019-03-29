import React, { Component } from 'react';

import './App.css';
import AlertsDemo from './components/AlertsDemo';
import TabsDemo from './components/TabsDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabsDemo tabs={tabs} defaultTab='1' />
      </div>
    );
  }
}

export default App;


const dropdownItems = [
  {
    id: 1,
    label:'File',
    disabled:false,
    header: true,
  },
  {
    id: 2,
    label:'Edit',
    disabled:false,
    header: false,
  },
  {
    id: 3,
    label:'Save',
    disabled:false,
    header: false,
  },
  {
    id: 4,
    label:'Delete',
    disabled:true,
    header: false,
  },
]
const tabs = [
  {
    id: '1',
    label: 'Home',
    component: <div>Home page</div>,
  },
  {
    id: '2',
    label: 'Alerts',
    component: <AlertsDemo/>,
  },
  /*
  {
    id: '3',
    label: 'Collapse',
    component: <CollapseDemo/>,
  },
  {
    id: '4',
    label: 'Dropdown',
    component: <DropdownDemo items={dropdownItems} />,
  },
  */
]
