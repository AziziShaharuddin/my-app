import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/containers/login';
import Register from './src/containers/register';
import Home from './src/containers/home';
import Detail from './src/containers/detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Register" component={Register} options={{
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: '#142F43',
            },
            headerTintColor: "white",
            headerTitleAlign: 'center',
          }} />
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: true,
            title: "Login Page",
            headerStyle: {
              backgroundColor: '#142F43',
            },
            headerTintColor: "white",
            headerTitleAlign: 'center',
          }} />
          <Stack.Screen name="Home" component={Home} options={{
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: '#142F43',
            },
            headerTintColor: "white",
            headerTitleAlign: 'center',
          }} />
          <Stack.Screen name="Detail" component={Detail} options={{
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: '#142F43',
            },
            headerTintColor: "white",
            headerTitleAlign: 'center',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
