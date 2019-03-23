import React from 'react';
import { shallow, mount } from 'enzyme';
import Component from '../index';

describe("MyComponent snapshot", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Component />);
  });
  it("should render initial layout", () => {
    // when
    const wrapper = shallow(<Component title="aasaa" />);
    // then
    expect(wrapper.getElements()).toMatchSnapshot();
  });

});


describe("MyComponent", () => {
  it("should initialize component state", () => {
    // given
    const wrapper = shallow(<Component />);
    expect(wrapper.state('myInput')).toBeDefined();
  });

  it("should create an entry in component state", () => {
    // given
    const wrapper = shallow(<Component />);
    const form = wrapper.find('input');
    // when
    form.props().onChange({target: {
      name: 'myInput',
      value: 'myValue'
    }});
    // then
    expect(wrapper.state('myInput')).toBeDefined();
  });
  it("should create an entry in component state with the event value", () => {
    // given
    const wrapper = shallow(<Component />);
    const form = wrapper.find('input');
    // when
    form.props().onChange({target: {
      name: 'myInput',
      value: 'myValue'
    }});
    // then
    expect(wrapper.state('myInput')).toEqual('myValue');
  });

  it('render a document title', () => {
    const title = "my component is working";
    const wrapper = shallow(
      <Component title={title} />
    );
    expect(wrapper.instance().props['title']).toEqual(title);
  });
  it('render expected classNames', () => {
    const wrapper = shallow(
      <Component />
    );
    expect(wrapper.find('.myComponentClass').length).toEqual(1);
  });
});
