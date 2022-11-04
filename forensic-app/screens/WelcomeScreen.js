import React, { Component } from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default function WelcomeScreen() {
  const names = ['Text retrieve from the article #1', 'Article #2 hyper-link', 'Article #3 hyper-link', 'Article #4 hyper-link', 'Article #5 hyper-link', 'Article #6 hyper-link']
  const [items, setItems] = React.useState([
    { name: names[0], url: 'https://aboutreact.com' },
    { name: names[1], url: 'https://aboutreact.com' },
    { name: names[2], url: 'https://www.google.com/search?q=research+forensic+fiu&oq=research+forensic+fiu+&aqs=chrome..69i57j33i160l2.3967j0j7&sourceid=chrome&ie=UTF-8' },
    { name: names[3], url: 'https://aboutreact.com' },
    { name: names[4], url: 'https://aboutreact.com' },
    { name: names[5], url: 'https://aboutreact.com' },
  ]);

  const onPress = () => Linking.openURL(url);
  return (

    <View style={{ flex: 1, marginTop: 10, marginRight: 2, marginLeft: 2, marginBottom: 2, backgroundColor: "#1a2f4d", borderRadius: 14, overflow: 'hidden' }}>
      <Text style={{ marginTop: 10, fontSize: 16, fontWeight: '550', color: "white" }}> Latest Entries </Text>
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (


          <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: '#e3dbda' }]}
            onPress={() => {
              Linking.openURL(item.url);
            }}>
            <Text style={styles.itemName}>{item.name}</Text>
          </TouchableOpacity>


        )}
      />
    </View>
  );
}

<FlatGrid
  itemDimension={130}
  data={[1, 2, 3, 4, 5, 6]}
  renderItem={({ item }) => (<Text>{item}</Text>)}
/>

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-start',
    borderRadius: 10,
    padding: 10,
    height: 100,
    backgroundColor: "#e3dbda"
  },
  itemName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '580',
  },
  itemCode: {
    fontWeight: '400',
    fontSize: 12,
    color: '#000',
  },
});