import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/index';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Tab = createBottomTabNavigator()

export default function HomeTabNavigator() {
    return (
        <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#f15454',
        }}>
            <Tab.Screen 
            name={"Explore"} 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <Fontisto name="search" size={25} color={color} />
                )
            }} />
            <Tab.Screen 
            name={"Saved"} 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome name="heart-o" size={25} color={color} />
                )
            }} />
            <Tab.Screen 
            name={"Trips"} 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome5 name="airbnb" size={25} color={color} />
                )
            }} />
            <Tab.Screen 
            name={"Inbox"} 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <Feather name="message-square" size={25} color={color} />
                )
            }} />
            <Tab.Screen 
            name={"Profile"} 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <EvilIcons name="user" size={25} color={color} />
                )
            }} />
        </Tab.Navigator>
    )
}
