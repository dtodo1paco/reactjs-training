// SimpleComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Component from '../index';
describe("SimpleComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Component />);
  });
});