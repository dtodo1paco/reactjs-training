import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute';

import CountryList from '../CountryList';
import CountryDetail from '../CountryDetail';

const URL_COUNTRIES = "https://restcountries.eu/rest/v2/all";
const URL_COUNTRY = "https://restcountries.eu/rest/v2/alpha/"

const PAGE_SIZE = 12;

const Countries = (props) => (
  <Switch>
    <Route
      path={`${props.match.url}/`} exact
      render={(props) =>
        <CountryList {...props}
          pageSize={PAGE_SIZE}
          url={URL_COUNTRIES}
        />
      }
    />
    <PrivateRoute
      path={`${props.match.url}/detail/:alpha3code`} strict
      component={CountryDetail}
      url={URL_COUNTRY}
    />

  </Switch>
);

export default Countries;