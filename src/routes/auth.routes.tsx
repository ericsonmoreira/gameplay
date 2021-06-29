import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AppointmentCreate from '../screens/AppointmentCreate';
import AppointmentDetails from '../screens/AppointmentDetails';
import Home from '../screens/Home';
import { theme } from '../theme';
import RoutesNames from './names.routes';

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
      <Screen name={RoutesNames.Home} component={Home} />
      <Screen
        name={RoutesNames.AppointmentDetails}
        component={AppointmentDetails}
      />
      <Screen
        name={RoutesNames.AppointmentCreate}
        component={AppointmentCreate}
      />
    </Navigator>
  );
};

export default AuthRoutes;
