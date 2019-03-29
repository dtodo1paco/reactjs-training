import React from 'react';
import messages from './setupTranslations';

import { IntlProvider } from 'react-intl'

import IntlDates from '../../components/IntlDates';
import IntlMessages from '../../components/IntlMessages';
class IntlContainer extends React.Component {

  state = {
    lang: navigator.language,
    tz: 'Europe/Madrid',
  }

  handleChange = (event) => {
    this.setState({lang: event.target.value});
  }

  render() {
    const { lang, tz } = this.state;
    return (
      <IntlProvider
        locale={lang}
        timeZone={tz}
        messages={messages[lang]}
      >
        <React.Fragment>
          <h1>React Intl</h1>
          <label>
            Pick your favorite language:
            <select value={lang} onChange={this.handleChange}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </label>
          <h3>some dates</h3>
          <IntlDates currentTime={new Date(1459832991883)} />
          <hr/>
          <IntlMessages />
        </React.Fragment>
      </IntlProvider>
    )
  }
}

export default IntlContainer;