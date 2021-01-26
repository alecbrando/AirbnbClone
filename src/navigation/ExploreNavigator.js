import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/index';
import SearchResultScreen from '../screens/SearchResults/index';

const Stack = createStackNavigator()

export default function Router(props) {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Welcome"}
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={"SearchResults"}
                component={SearchResultScreen}
                options={{
                    title: 'Search your destination'
                }}
            />
        </Stack.Navigator>
    )
}
