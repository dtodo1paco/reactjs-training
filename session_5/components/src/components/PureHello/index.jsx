import React from 'react';
import withSecret from '../HOCSecret';

export class PureHello extends React.PureComponent {
  render() {
    return <h1>Welcome</h1>
  }
}

export const Hello = withSecret(PureHello);
