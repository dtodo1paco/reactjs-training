import React from 'react';
import {
  Button,
  ButtonGroup,
  } from 'reactstrap';
//ButtonDropdown,ButtonToolbar

const types = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"];

const ButtonsDemo = (props) => (
  <div>
    <h3>Buttons</h3>
    {
      types.map( type => (
        <ButtonGroup key={type}>
          <Button color={type}>{type}</Button>
          <Button color={'outline-'+type}>{'outline-'+type}</Button>
        </ButtonGroup>
      ))
    }
  </div>
)

export default ButtonsDemo;
