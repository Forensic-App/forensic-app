import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import axios from "axios";

const initialArticlesData = [];

export default function SearchScreen() {
  const [searchText, setSearchText] = useState("");
  const [articlesData, setArticlesData] = useState(initialArticlesData);

  function handleSearchInput(prompt) {
    setSearchText(prompt);
  }

  function handleSearchButton() {
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
            date: new Date(entry.date),
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
        renderItem={({ item }) => <ArticleItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

function ArticleItem({ title, date }) {
  return (
    <View style={styles.item}>
      <Text style={{ fontSize: 14 }}>{title}</Text>
      <Text style={{ fontSize: 14, color: "#999999", marginTop: 14 }}>
        Year: {date && date.getFullYear()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: "flex-start",
  },
  container: {
    flex: 1,
  },
  item: {
    paddingBottom: 24,
    marginTop: 14,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4",
  },
  title: {
    fontSize: 32,
  },
});
