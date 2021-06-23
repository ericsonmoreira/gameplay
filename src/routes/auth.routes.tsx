import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Signin from '../screens/Signin';
import { theme } from '../theme';
import RoutesNames from './names.routes';
import AppointmentDetails from '../screens/AppointmentDetails';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name={RoutesNames.Signin} component={Signin} />
      <Screen name={RoutesNames.Home} component={Home} />
      <Screen
        name={RoutesNames.AppointmentDetails}
        component={AppointmentDetails}
      />
    </Navigator>
  );
};

export default AuthRoutes;
