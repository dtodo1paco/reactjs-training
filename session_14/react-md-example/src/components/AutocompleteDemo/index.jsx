import React, { PureComponent } from 'react';
import { Autocomplete } from 'react-md';

const sampleData = ['Java', 'Javascript', 'Python', 'Kotlin', 'Matlab', 'Octave', 'C++', 'bash'];

export default class MenuAutocomplete extends PureComponent {
  render() {
    return (
      <div>
        <Autocomplete
          id="programming-languages"
          label="Programming languages"
          placeholder="Javascript"
          data={sampleData}
          fillViewportHeight
          filter={Autocomplete.caseInsensitiveFilter}
        />
      </div>
    );
  }
}