import React, { Component } from 'react';
import './App.css';
import HomeIcon from '@material-ui/icons/Home';
import AddCommentIcon from '@material-ui/icons/AddComment';
import BorderClearIcon from '@material-ui/icons/BorderClear';
import DateRangeIcon from '@material-ui/icons/DateRange';


import TabsDemo from './components/TabsDemo';
import ModalDemo from './components/ModalDemo';
import GridListDemo from './components/GridListDemo'
import DateTimePickersDemo from './components/DateTimePickersDemo';

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


const tabs = [
  {
    id: 1,
    label: 'Home',
    component: <TabsDemo tabs={[{
      id: 2,
      label: 'Modal',
      component: <ModalDemo />,
      icon: <AddCommentIcon />
    },
      {
        id: 3,
        label: 'GridList',
        component: <GridListDemo />,
        icon: <BorderClearIcon />
      },]} />,
    icon: <HomeIcon />
  },
  {
    id: 2,
    label: 'Modal',
    component: <ModalDemo />,
    icon: <AddCommentIcon />
  },
  {
    id: 3,
    label: 'GridList',
    component: <GridListDemo />,
    icon: <BorderClearIcon />
  },
  {
    id: 4,
    label: 'DatePickers',
    component: <DateTimePickersDemo />,
    icon: <DateRangeIcon />
  },
]

