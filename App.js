import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import WelcomeContainer from './src/modules/Welcome/Welcome.container';
import RegisterContainer from './src/modules/Register/Register.container';
import VerifyContainer from './src/modules/Verify/Verify.container'
import NameContainer from './src/modules/Name/Name.container'
import GenderContainer from './src/modules/Gender/Gender.container'
import AvatarContainer from './src/modules/Avatar/Avatar.container'
import NotificationContainer from './src/modules/Notification/Notification.container'
import MapContainer from './src/modules/Map/Map.container'
import DiscoveryContainer from './src/modules/Discovery/Discovery.container'
import AuthLoadingScreen from './src/navigation/AuthLoading.screen'

const AppStack = createStackNavigator({
  Maps: MapContainer,
  Discovery: DiscoveryContainer
}, {
    defaultNavigationOptions: { header: null }
  }
);

const AuthStack = createStackNavigator({
  Welcome: WelcomeContainer,
  Register: RegisterContainer,
  Verify: VerifyContainer,
  NameInput: NameContainer,
  ChooseGender: GenderContainer,
  Avatar: AvatarContainer,
  NotifiPermision: NotificationContainer
}, {
    defaultNavigationOptions: { header: null }
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));