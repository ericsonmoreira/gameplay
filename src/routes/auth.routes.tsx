import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Signin from '../screens/Signin';
import RoutesNames from './names.routes';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Screen name={RoutesNames.Signin} component={Signin} />
      <Screen name={RoutesNames.Home} component={Home} />
    </Navigator>
  );
};

export default AuthRoutes;
