import React, { Component } from 'react';
import {
  Image
} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { IMAGES, FONTS } from "./assets";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FirstScreen from './src/screens/FirstScreen/FirstScreen';
import SecondScreen from './src/screens/SecondScreen/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen/ThirdScreen';
import FourthScreen from './src/screens/FourthScreen/FourthScreen';
import FifthScreen from './src/screens/FifthScreen/FifthScreen';
import SixthScreen from './src/screens/SixthScreen/SixthScreen';
import SeventhScreen from './src/screens/SeventhScreen/SeventhScreen';
import EighthScreen from './src/screens/EighthScreen/EighthScreen';
import NinthScreen from './src/screens/NinthScreen/NinthScreen';
import FirstSampleScreen from './src/screens/SampleScreen/FirstSampleScreen';
import SecondSampleScreen from './src/screens/SampleScreen/SecondSampleScreen';
import ThirdSampleScreen from './src/screens/SampleScreen/ThirdSampleScreen';
import FourthSampleScreen from './src/screens/SampleScreen/FourthSampleScreen';

const AppNavigator = createBottomTabNavigator(
  {
    NinthScreen: {
      screen: NinthScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name='car' color={tintColor} size={14} />
        )
      }
    },
    FirstSampleScreen: {
      screen: FirstSampleScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name='utensils' color={tintColor} size={14} />
        )
      }
    },
    SecondSampleScreen: {
      screen: SecondSampleScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name='user-friends' color={tintColor} size={14} />
        )
      }
    },
    ThirdSampleScreen: {
      screen: ThirdSampleScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name='envelop' color={tintColor} size={14} />
        )
      }
    },
    FourthSampleScreen: {
      screen: FourthSampleScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name='ellipsis-h' color={tintColor} size={14} />
        )
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'grey',
      inactiveTintColor: 'black',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
      },
      showLabel: false,
    }
  }
);

const MyStackNavigator = createStackNavigator(
  {
    FirstScreen: {
      screen: FirstScreen,
    },
    SecondScreen: {
      screen: SecondScreen,
    },
    ThirdScreen: {
      screen: ThirdScreen,
    },
    FourthScreen: {
      screen: FourthScreen,
    },
    FifthScreen: {
      screen: FifthScreen,
    },
    SixthScreen: {
      screen: SixthScreen,
    },
    SeventhScreen: {
      screen: SeventhScreen,
    },
    EighthScreen: {
      screen: EighthScreen,
    },
    NinthScreen: {
      screen: AppNavigator,
    },
  },
  {
    initialRouteName: 'FirstScreen',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const AppContainer = createAppContainer(MyStackNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
