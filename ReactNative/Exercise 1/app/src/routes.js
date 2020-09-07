import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main'
import LaunchDetails from './pages/launchDetails'

const Stack = createStackNavigator();

export default function MyStack() {
  return (

    //Use headerMode="none" caso não queira a toolbar
    <Stack.Navigator /*headerMode="none"*/>

      <Stack.Screen name="Launches" component={Main}

        options={{
          headerTransparent: false,
          headerStatusBarHeight: 0,
          cardShadowEnabled: true,
          cardOverlayEnabled: false,
          animationEnabled: true,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#DA552F' },
        }}

      />

      <Stack.Screen
        name="LaunchDetails"
        component={LaunchDetails}
        options={
          ({ route }) => ({ title: `Details of Launch: ${route.params.launch.mission_name}` }),
          {
            headerTransparent: false,
            headerStatusBarHeight: 0,
            cardShadowEnabled: true,
            cardOverlayEnabled: false,
            animationEnabled: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#DA552F'
            }
          }
        }
      />

    </Stack.Navigator>
  );
}
