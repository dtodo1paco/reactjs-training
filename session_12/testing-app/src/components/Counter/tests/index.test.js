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
  it("should have a button", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(1);
  });
});
describe(`${Component.displayName} behavior`, () => {
  it("should handle button click and update state", () => {
    const wrapper = shallow(<Component />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.state('count')).toEqual(2);
  });
  it("should render using state", () => {
    const wrapper = shallow(<Component />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('h2').text()).toEqual('Number of clicks: 2');
  });
});