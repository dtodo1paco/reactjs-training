import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Layout(props) {
  return (
    <div>
      <Header />
      <div className="mainPage">
        <h1>{props.title}</h1>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
