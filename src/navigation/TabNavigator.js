import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import GenreScreen from '../screens/GenreScreen';
import AboutScreen from '../screens/AboutScreen';
import ChatScreen from '../screens/ChatScreen';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator()



    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = "home"
                    }
                    else if (route.name === "Genre") {
                        iconName = "grid"
                    }
                    else if (route.name === "Chat") {
                        iconName = "chatbubbles"
                    }
                    else if (route.name === "About") {
                        iconName = "information-circle"
                    }
                    size = focused ? 35 : 30;
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarInactiveTintColor: "grey",
                tabBarActiveTintColor: "black",
            })}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
            />
            <Tab.Screen
                name='Genre'
                component={GenreScreen}
            />
            <Tab.Screen
                name='Chat'
                component={ChatScreen}
            />
            <Tab.Screen
                name='About'
                component={AboutScreen}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator