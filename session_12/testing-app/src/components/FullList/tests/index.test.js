import React from 'react';
import { shallow } from 'enzyme';

import Component from '../index';

describe('FullList tests', () => {

  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = shallow(<Component items={items} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('ul')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);
  });
  it('should render a span instead of a ul', () => {
    const items = [];
    const wrapper = shallow(<Component items={[]} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('span')).toHaveLength(1);
  });
  it('renders a list item', () => {
    const items = ['Jacobo', 'Noelia'];
    const wrapper = shallow(<Component items={items} />);

    // Check if an element in the Component exists
    expect(wrapper.contains(
      <li key='Jacobo' className="item">Jacobo</li >)
    ).toBeTruthy();
  });

  it('renders correct text in item', () => {
    const items = ['Ilya', 'Regina', 'Ernesto'];
    const wrapper = shallow(<Component items={items} />);

    //Expect the child of the first item to be an array
    expect(wrapper.find('.item').get(0).props.children).toEqual(items[0]);
  });
});