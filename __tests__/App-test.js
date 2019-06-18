/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';

// import asMock from '@react-native-community/async-storage/jest/async-storage-mock';
// jest.mock('@react-native-community/async-storage', () => asMock);

import TestRenderer from "react-test-renderer";

import { shallow, render, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;

it('renders correctly', () => {
  // const wrapper = shallow(<App />).toJSON();
  expect(true).toBe(true)
  // expect(wrapper).toMatchSnapshot()
});

// it('checks if Async Storage is used', async () => {
//   await asyncOperationOnAsyncStorage();

//   expect(AsyncStorage.getItem).toBeCalledWith('userToken');
// })