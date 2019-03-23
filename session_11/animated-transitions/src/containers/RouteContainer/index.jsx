import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Pricing from "../../components/Pricing"
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './styles.css';

const RouteContainer = ({ location }) => {
    return (
      <div className="MainApp">
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 3000, exit: 3000 }}
            classNames="fade"
          >
            <section className="route-section">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/pricing" component={Pricing} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>

      </div>
    );
  }

export default withRouter(RouteContainer);
