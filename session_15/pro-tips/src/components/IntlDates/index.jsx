import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedDate, FormattedTime} from 'react-intl';

class IntlDates extends Component {
  render() {
    const {currentTime} = this.props;
    return (
      <FormattedDate
        value={currentTime}
        year='numeric'
        month='long'
        day='1-digit'
      />
    );
  }
}

IntlDates.propTypes = {
  currentTime: PropTypes.object,
};

IntlDates.defaultProps = {
  currentTime: new Date(),
};

export default IntlDates;