import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import SearchandGenreScreen from '../screens/SearchandGenreScreen';
import AboutScreen from '../screens/AboutScreen';
import ChatScreen from '../screens/ChatScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator()



    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = "home-sharp"
                    }
                    else if (route.name === "Search") {
                        iconName = "search"
                    }
                    else if (route.name === "Favourites") {
                        iconName = "heart"
                    }
                    else if (route.name === "Chat") {
                        iconName = "chatbubbles-sharp"
                    }
                    else if (route.name === "About") {
                        iconName = "information-circle-sharp"
                    }
                    size = focused ? 35 : 30;
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarInactiveTintColor: "grey",
                tabBarActiveTintColor: "black",
                headerShown: false,
            })}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
            />
            <Tab.Screen
                name='Favourites'
                component={FavouritesScreen}
            />
            <Tab.Screen
                name='Search'
                component={SearchandGenreScreen}
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
