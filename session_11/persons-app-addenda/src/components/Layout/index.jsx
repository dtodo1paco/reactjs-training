import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

function Layout(props) {
  return (
    <div>
      <Header />
      <div id="content">
        <h1>{props.title}</h1>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
