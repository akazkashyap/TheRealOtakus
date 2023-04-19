import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors, IconButton } from 'react-native-paper';
import styled from 'styled-components/native';

import SearchButton from '../components/SearchButton';
import CustomDrawerContent from './CustomDrawerContent';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SearchandGenreScreen from '../screens/SearchandGenreScreen';
import AboutScreen from '../screens/AboutScreen';
import ChatScreen from '../screens/ChatScreen';
import { useSelector } from 'react-redux';
import MenuButton from '../components/utils/MenuButton';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const theme = useSelector(state => state.appTheme.theme);
  const navigation = useNavigation();

  const getHeaderRightHome = () => (
    <Wrapper>
      <SearchButton />
      <IconButton
        icon="heart"
        color="#fff"
        onPress={() => navigation.navigate('favourite')}
      />
    </Wrapper>
  );

  const getHeaderRightChat = () => <MenuButton />;

  const getDrawerContent = props => <CustomDrawerContent {...props} />;
  return (
    <Drawer.Navigator
      drawerContent={getDrawerContent}
      initialRouteName="home"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: theme.drawer.BG_COLOR },
        headerTitleStyle: { fontFamily: 'Stentiga' },
        drawerContentStyle: { backgroundColor: '#ffffff' },
        drawerLabelStyle: {
          color: Colors.purple900,
          fontFamily: 'Wabene',
        },
        drawerActiveTintColor: Colors.purple800,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'The Real Otakus',
          headerRight: getHeaderRightHome,
        }}
      />
      <Drawer.Screen name="Search" component={SearchandGenreScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerRight: getHeaderRightChat,
        }}
      />
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };

const Wrapper = styled.View`
  flex-direction: row;
`;
