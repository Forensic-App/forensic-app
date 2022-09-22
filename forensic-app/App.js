import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import AboutScreen from './screens/AboutScreen';
import ImageGalleryScreen from './screens/ImageGalleryScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CollectionsScreen from './screens/CollectionsScreen';
import SearchScreen from './screens/SearchScreen';
import SubscribeScreen from './screens/SubscribeScreen';
// import { DrawerContent } from './screens/DrawerContent';

const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Welcome"
        drawerContentOptions={{
          activeTintColor: '#e91e63', itemStyle: { marginVertical: 10 },
        }}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Image Gallery" component={ImageGalleryScreen} />
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
        <Drawer.Screen name="Collections" component={CollectionsScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
        <Drawer.Screen name="Subscribe" component={SubscribeScreen} />
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

//        <Drawer.Screen name="ImageGallery" component={ImageGalleryScreen} />
//        <Drawer.Screen name="Search" component={SearchScreen} />
