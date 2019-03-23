import React from 'react';
import { shallow } from 'enzyme';
import Component from '../index';

describe(`${Component.displayName} basics`, () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Component />);
  });
  it("should match snapshot", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});
describe(`${Component.displayName} structure`, () => {
  it("should have a li", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find('li').length).toEqual(1);
  });
  it("should render prop item as a li element", () => {
    const wrapper = shallow(<Component item="test"/>);
    expect(wrapper.find('li').text()).toEqual("test");
  });
});