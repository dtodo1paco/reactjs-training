import React, { Component } from 'react';
import './App.css';
import './App.sass';

import TabsDemo from './components/TabsDemo';
import AutocompleteDemo from './components/AutocompleteDemo'
import DataTableDemo from './components/DataTableDemo';
import NavigationDrawerDemo from './components/NavigationDrawerDemo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationDrawerDemo navItems={links}>
          <TabsDemo tabs={tabs} />
        </NavigationDrawerDemo>
      </div>
    );
  }
}

export default App;

const links = [
  {
    id: 1,
    label: "home",
    link: "/home"
  },
  {
    id: 2,
    label: "other",
    link: "/other"
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
    label: 'Autocomplete',
    component: <AutocompleteDemo />,
  },
  {
    id: '3',
    label: 'DataTable',
    component: <DataTableDemo />,
  },
]
