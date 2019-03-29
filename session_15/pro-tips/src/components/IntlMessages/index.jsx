import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
class IntlMessage extends Component {
  render() {
    const {currentTime} = this.props;

    return (
      <React.Fragment>
        <FormattedMessage {...messages.intro} />
        <FormattedMessage
              {...messages.title}
          values={{
            title: (
              <b>
                React-Intl
              </b>
            ),
          }}
        />
      </React.Fragment>
    );
  }
}

IntlMessage.propTypes = {
  currentTime: PropTypes.object,
};

IntlMessage.defaultProps = {
  currentTime: new Date(),
};

export default IntlMessage;