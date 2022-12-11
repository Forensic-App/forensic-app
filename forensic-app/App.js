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
import CatResultsScreen from './screens/CatResultsScreen';
import ColResultsScreen from './screens/ColResultsScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import ContactScreen from './screens/ContactScreen';


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
        screenOptions={{
          activeTintColor: '#0563ad',
          itemStyle: { marginVertical: 10 },
        }}>
        <Drawer.Screen name="Welcome " component={WelcomeScreen}
          options={{
            // title: 'Welcome H',
            headerTitle: " Research Forensic Library",
            headerStyle: {
              backgroundColor: "#0C2141",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
              justifyContent: 'center',
              alignItems: 'center',
            },
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
          headerTitle: () => (
            <ImageBackground style={{ width: 125, height: 45 }}
              source={require("./assets/forensiclogo.png")} />
          ),
          headerStyle: {
            backgroundColor: "#0C2141",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
            justifyContent: 'center',
            alignItems: 'center',
          },
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name='md-people'
              size={size}
              color={focused ? '#7cc' : '#000'}
            />
          ),
        }}
        />
        <Drawer.Screen name="Search" component={SearchScreen} initialParams = {{ appendUrl: ""}} options={{
          //title: 'Search',
          headerTitle: () => (
            <ImageBackground style={{ width: 110, height: 50 }}
              source={require("./assets/fiuwhitelogo.png")} />
          ),
          headerStyle: {
            backgroundColor: "#0C2141",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
            justifyContent: 'center',
            alignItems: 'center',
          },
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
        <Drawer.Screen name="Contact Us" component={ContactScreen} options={{
          title: 'Contact Us',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name='md-call'
              size={size}
              color={focused ? '#7cc' : '#000'}
            />
          ),
        }}
        />
        <Drawer.Screen name="CatResults" component={CatResultsScreen} options={{
            drawerLabel: () => null,
            title: null,
            drawerItemStyle: {height: 0}
        }}
        />
        <Drawer.Screen name="ColResults" component={ColResultsScreen} options={{
            drawerLabel: () => null,
            title: null,
            drawerItemStyle: {height: 0}
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