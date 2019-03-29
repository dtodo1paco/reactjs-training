import { addLocaleData } from "react-intl";

import locale_en from 'react-intl/locale-data/en';
import locale_es from 'react-intl/locale-data/es';

import messages_es from "../../translations/es.json";
import messages_en from "../../translations/en.json";

addLocaleData([...locale_en, ...locale_es]);

const messages = {
  'es': messages_es,
  'en': messages_en
};

export default messages;