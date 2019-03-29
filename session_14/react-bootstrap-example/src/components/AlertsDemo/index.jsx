import React from 'react';
import { Alert } from 'react-bootstrap';

function AlertsDemo (props) {
  return (
    [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))
  )
}

export default AlertsDemo;