import React from 'react';
import { shallow, mount, render } from 'enzyme';

import List from '../index';

describe('Component tests', () => {

  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = mount(<List items={items} />);
    //console.log(wrapper.debug());

    // Expect the wrapper object to be defined
    expect(wrapper.find('ListItem')).toBeDefined();
    expect(wrapper.find('ListItem')).toHaveLength(items.length);
  });

  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = render(<List items={items} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-items')).toBeDefined();
  });
});