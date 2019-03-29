import React, { Component } from 'react';
import './App.css';

import ButtonsDemo from './components/ButtonsDemo';
import CollapseDemo from './components/CollapseDemo';
import TabsDemo from './components/TabsDemo';
import DropdownDemo from './components/DropdownDemo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TabsDemo tabs={tabs} />
      </div>
    );
  }
}

export default App;

// DATA for demo

const dropdownItems = [
  {
    id: 1,
    label:'Filemón',
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
    label: 'Buttons',
    component: <ButtonsDemo/>,
  },
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
]


