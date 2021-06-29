import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useAuth } from '../context/auth';
import AuthRoutes from './auth.routes';
import Signin from '../screens/Signin';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <Signin />}
    </NavigationContainer>
  );
};

export default Routes;
