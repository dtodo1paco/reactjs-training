import React from 'react';
import {
  BrowserRouter as MiRouter,
  Route,
  Link,
  Switch,
  } from "react-router-dom";
import { Home } from '../../components/Home';
import Topics from '../../components/Topics';
import RedirectWhenClick from '../../components/RedirectWhenClick'

function App() {
  const loc = {};
  return (
    <MiRouter location={loc}>
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" strict component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/redirect" component={RedirectWhenClick} />
          <Route render={ (props) => <h1>Not found</h1>} />
        </Switch>

      </div>
    </MiRouter>
  );
}



function About() {
  return <h2>About</h2>;
}

function Header() {
  return (
    <ul>
      <li>
        <Link className="" to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/redirect">Redirect</Link>
      </li>
    </ul>
  );
}

export default App;