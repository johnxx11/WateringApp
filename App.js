import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddFlowerScreen from './screens/AddFlowerScreen';
import FlowerScreen from './screens/FlowerScreen';
import VerificationScreen from './screens/VerificationScreen';


const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#008000" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Verification' component={VerificationScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='AddFlower' component={AddFlowerScreen}/>
        <Stack.Screen name='Flower' component={FlowerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}