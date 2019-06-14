/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import TestRenderer from "react-test-renderer";

import { shallow, render, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const wrapper = renderer.create(<App />).toJSON();
  expect(wrapper).toMatchSnapshot()
});
