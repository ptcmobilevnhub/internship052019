import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FirstScreen from '../screens/FirstScreen/FirstScreen';
import SecondScreen from '../screens/SecondScreen/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen/ThirdScreen';
import FourthScreen from '../screens/FourthScreen/FourthScreen';
import FifthScreen from '../screens/FifthScreen/FifthScreen';
import SixthScreen from '../screens/SixthScreen/SixthScreen';
import SeventhScreen from '../screens/SeventhScreen/SeventhScreen';
import EighthScreen from '../screens/EighthScreen/EighthScreen';
import NinthScreen from '../screens/NinthScreen/NinthScreen';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import FirstSampleScreen from '../screens/SampleScreen/FirstSampleScreen';
import SecondSampleScreen from '../screens/SampleScreen/SecondSampleScreen';
import ThirdSampleScreen from '../screens/SampleScreen/ThirdSampleScreen';
import FourthSampleScreen from '../screens/SampleScreen/FourthSampleScreen';

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

export default AppContainer;