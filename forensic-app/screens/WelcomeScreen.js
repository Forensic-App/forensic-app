import React, { Component, useState } from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import axios from "axios";
import { color } from 'react-native-reanimated';

const latestArticlesData = [];

export default function WelcomeScreen() {
  const [articlesData, setArticlesData] = useState(latestArticlesData);

  axios
    .get("https://forensiclibrary.org/wp-json/wp/v2/posts?per_page=5",
    )
    .then((response) => {
      const { data } = response;

      const newArticlesData = data.map((entry) => {
        return {
          title: entry.title.rendered,
          authors: entry.acf.authors,
          link: entry.acf.link1
        };
      });
      setArticlesData(newArticlesData);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <View style={{ flex: 1, marginTop: 10, marginRight: 2, marginLeft: 2, marginBottom: 2, backgroundColor: "#1a2f4d", borderRadius: 14, overflow: 'hidden' }}>
      <Text style={{ marginTop: 10, fontSize: 16, fontWeight: '550', color: "white" }}> Latest Entries </Text>
      <FlatGrid
        // showsVerticalScrollIndicator={true}
        itemDimension={200}
        data={articlesData}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => <ArticleItem {...item} />
        }
      />
    </View>
  );
}

function ArticleItem({ title, authors, link }) {
  return (
    // <View style={styles.item} >
    <TouchableOpacity
      // style={[styles.itemContainer, { backgroundColor: '#e3dbda' }]}
      onPress={() => {
        Linking.openURL(item.link);
      }}>
      <Text style={[styles.itemTitle]} onPress={() => Linking.openURL(link)}>
        {title}</Text>
      <Text style={[styles.itemAuthor]}>Author: {authors}</Text>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemTitle: {
    justifyContent: 'flex-start',
    borderRadius: 10,
    padding: 10,
    height: 180,
    backgroundColor: "#e3dbda",
    fontWeight: '500'
  },
  itemAuthor: {
    justifyContent: 'flex-start',
    borderRadius: 10,
    padding: 10,
    height: 180,
    backgroundColor: "#e3dbda",
    fontWeight: '300'
  },
  itemCode: {
    fontWeight: '400',
    fontSize: 12,
    color: '#000',
  },
});