import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationScreen from "../screens/DestinationScreen";
import HomeScreen from '../screens/Home/index';
import GuestScreen from '../screens/GuestScreen/index';
import Listing from '../components/Listing/index';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
          >
            <Stack.Screen
              name={"Home"}
              component={HomeTabNavigator}
              options={{
                headerShown: false,
              }}
            />
    
            <Stack.Screen
              name={"Destination Search"}
              component={DestinationScreen}
              options={{
                title: "Search your destination"
              }}
            />
    
            <Stack.Screen
              name={"Guests"}
              component={GuestScreen}
              options={{
                title: "How many people?"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
