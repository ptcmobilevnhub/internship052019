import React from 'react';
import { shallow, render, mount, configure } from 'enzyme'

import WelcomeContainer from '../Welcome.container'
import { TouchableOpacity } from 'react-native';


import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;

describe('Welcome Container Test', () => {
    it('should render snapshot test for welcome container', () => {
        const props = {
            navigation: {
                navigate: jest.fn()
            },
        }
        const wrapper = render(<WelcomeContainer {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should show state as message expect when mount component', () => {
        const props = {
            navigation: {
                navigate: jest.fn()
            }
        }
        const wrapper = mount(<WelcomeContainer {...props} />)
        wrapper.find(TouchableOpacity).props().onPress()

        expect(props.navigation.navigate).toHaveBeenCalledWith('Register')
    })
})