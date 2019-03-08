import React, { Component } from 'react';
import './App.css';

import Layout from './Layout';
import ConditionalRender from './ConditionalRender';
import Message from './Message';
import MessageConf from './MessageConf';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <ConditionalRender results={[1,2,3]}/>
        {/*
        <Message type='error'  />
        <MessageConf type='warning' text='watch your step!' />
         */}
        </Layout>
      </div>
    );
  }
}

export default App;
