import React from 'react';
import { shallow, mount } from 'enzyme';
import Component from '../index';

import { fetchData } from '../../../modules/fetchRemote';

jest.mock("../../../modules/fetchRemote"); // same for all exports
//
// mock responses
//
fetchData
  .mockReturnValueOnce({name:"dtodo1paco", counter: 1})
  .mockReturnValueOnce({name:"dtodo1paco", counter: 2})
  .mockReturnValue({name:"dtodo1paco", counter: 3});


describe("ApiComponent basics", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Component url="test"/>);
  });
  it("should render initial layout", () => {
    const wrapper = shallow(<Component url="test"/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  it("should NOT initialize component state", () => {
    const wrapper = shallow(<Component url="test"/>);
    expect(wrapper.state('response')).not.toBeDefined();
  });

  it('receive props correctly', () => {
    const wrapper = shallow(
      <Component url="test" />
    );
    expect(wrapper.instance().props['url']).toEqual("test");
  });
});

describe("ApiComponent event handling", () => {
  it('call API when button clicked', () => {
    const wrapper = shallow(
      <Component url="testURL"/>
    );
    const button = wrapper.find('button');
    button.simulate('click');
    expect(fetchData).toHaveBeenCalled();

  });
  it('call API when button clicked with correct params', () => {
    const wrapper = shallow(
      <Component url="testURL"/>
    );
    const button = wrapper.find('button');
    button.simulate('click');
    expect(fetchData).toHaveBeenCalledWith("testURL")
  });
});

describe("ApiComponent state update", () => {

  //
  // async method, needs await
  //
  it('call API when button clicked set state to response', async () => {
    const wrapper = shallow(
      <Component url="testURL"/>
    );
    const button = wrapper.find('button');
    //
    // IMPORTANT: buttton click will wait API to change state
    //
    await button.simulate('click');
    expect(wrapper.state('response')).toBeDefined();
  });

  it('call API when button clicked set state to response', async () => {
    const wrapper = shallow(
      <Component url="testURL"/>
    );
    const button = wrapper.find('button');
    //
    // IMPORTANT: buttton click will wait API to change state
    //
    await button.simulate('click');
    expect(wrapper.state('response').counter).toEqual(3);
  });
});
