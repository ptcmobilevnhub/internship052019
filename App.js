import React, { Component } from 'react';
import {
  Image
} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
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
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import FirstSampleScreen from './src/screens/SampleScreen/FirstSampleScreen';
import SecondSampleScreen from './src/screens/SampleScreen/SecondSampleScreen';
import ThirdSampleScreen from './src/screens/SampleScreen/ThirdSampleScreen';
import FourthSampleScreen from './src/screens/SampleScreen/FourthSampleScreen';

const AppNavigator = createBottomTabNavigator(
  {
    NinthScreen: {
      screen: NinthScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='car' color={tintColor} size={20} />
        )
      }
    },
    FirstSampleScreen: {
      screen: FirstSampleScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='utensils' color={tintColor} size={20} />
        )
      }
    },
    SecondSampleScreen: {
      screen: SecondSampleScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='user-friends' color={tintColor} size={20} />
        )
      }
    },
    ThirdSampleScreen: {
      screen: ThirdSampleScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='envelope' color={tintColor} size={20} />
        )
      }
    },
    FourthSampleScreen: {
      screen: FourthSampleScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ellipsis-h' color={tintColor} size={20} />
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

const RegisterNavigator = createStackNavigator(
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
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const LoggedInNavigator = createStackNavigator(
  {
    EighthScreen: {
      screen: EighthScreen,
    },
    NinthScreen: {
      screen: AppNavigator,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthScreen: AuthScreen,
    LoggedInScreen: LoggedInNavigator,
    RegisterScreen: RegisterNavigator,
  },
  {
    initialRouteName: 'AuthScreen',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
));

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
