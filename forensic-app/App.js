import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import AboutScreen from './screens/AboutScreen';
import ImageGalleryScreen from './screens/ImageGalleryScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CollectionsScreen from './screens/CollectionsScreen';
import SearchScreen from './screens/SearchScreen';
import SubscribeScreen from './screens/SubscribeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomDrawer from './components/CustomDrawer'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // drawerContent={props => <CustomDrawer {...props} />}
        //drawerType="front"
        initialRouteName="Welcome"
        drawerContent={(props) => {
          return (
            <View style={{ flex: 1 }}>
              <DrawerContentScrollView {...props}>
                <ImageBackground source={require("./assets/fiulogo.png")}
                  style={{ justifyContent: "space-between", alignItems: "center", padding: 50, marginTop: 10, marginLeft: 30, marginRight: 30, marginBottom: 10, backgroundColor: "rgb(255,255,255)" }}
                  imageStyle=
                  {{ opacity: 10 }}>
                </ImageBackground>
                <DrawerItemList {...props} />
              </DrawerContentScrollView>
            </View>
          )
        }
        }
        drawerContentOptions={{
          activeTintColor: '#0563ad',
          itemStyle: { marginVertical: 10 },
        }}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen}
          options={{
            title: 'Welcome',
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name='md-home'
                size={size}
                color={focused ? '#7cc' : '#000'}
              />
            ),
          }}
        />
        <Drawer.Screen name="About" component={AboutScreen} options={{
          title: 'About',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name='md-people'
              size={size}
              color={focused ? '#7cc' : '#000'}
            />
          ),
        }}
        />
        <Drawer.Screen name="Search" component={SearchScreen} options={{
          title: 'Search',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name='md-search'
              size={size}
              color={focused ? '#7cc' : '#000'}
            />
          ),
        }}
        />
        <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
          title: 'Categories',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name='md-document-text'
              size={size}
              color={focused ? '#7cc' : '#000'}
            />
          ),
        }}
        />
        <Drawer.Screen name="Collections" component={CollectionsScreen} options={{
          title: 'Collections',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name='md-chatbox-ellipses'
              size={size}
              color={focused ? '#7cc' : '#000'}
            />
          ),
        }}
        />
        <Drawer.Screen name="Image Gallery" component={ImageGalleryScreen} options={{
          title: 'Image Gallery ',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name='md-image'
              size={size}
              color={focused ? '#7cc' : '#000'}
            />
          ),
        }}
        />
        <Drawer.Screen name="Subscribe" component={SubscribeScreen} options={{
          title: 'Subscribe',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name='md-add-circle'
              size={size}
              color={focused ? '#7cc' : '#000'}
            />
          ),
        }}
        />
      </Drawer.Navigator>
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