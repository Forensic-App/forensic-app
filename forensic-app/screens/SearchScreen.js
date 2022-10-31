import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { Linking } from "react-native";
import axios from "axios";

const initialArticlesData = [];

export default function SearchScreen() {
  const [searchText, setSearchText] = useState("");
  const [articlesData, setArticlesData] = useState(initialArticlesData);

  function handleSearchInput(prompt) {
    setSearchText(prompt);
  }

  function handleSearchButton() {
    const regex = RegExp("(?<=href=\")(.*?)(?=\")");
    const test = RegExp(".+?(?=.<p><a)", 'is');
    axios
      .get("https://forensiclibrary.org/wp-json/wp/v2/posts", {
        params: { search: searchText.trim() },
      })
      .then((response) => {
        const { data } = response;
        
        const newArticlesData = data.map((entry) => {
          return {
            id: entry.id,
            title: entry.title.rendered,
            content: entry.content.rendered,
            disContent: test.exec(entry.content.rendered)[0],
            date: new Date(entry.date),
            link: regex.exec(entry.content.rendered)[0]
          };
        });
        setArticlesData(newArticlesData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Searchbar
        style={{ marginVertical: 22, marginHorizontal: 16 }}
        activeOutlineColor="#063970"
        value={searchText}
        onChangeText={handleSearchInput}
        onIconPress={handleSearchButton}
      />
      <FlatList
        data={articlesData}
        renderItem={({ item }) => <ArticleItem {...item}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

function ArticleItem({ title, content, link, disContent }) {
  return (
    <View style={styles.item} >
      <Text style={{ fontSize: 14, color: 'blue' }} onPress={() => Linking.openURL(link)}>
        {title}</Text>
      <Text style={{ fontSize: 14, marginTop: 14}}>
        {disContent.replace(/(<([^>]+)>)/ig, "")}</Text>
    </View>
  );
}