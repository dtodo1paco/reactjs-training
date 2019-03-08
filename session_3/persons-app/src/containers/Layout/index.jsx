import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Presentational component
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
