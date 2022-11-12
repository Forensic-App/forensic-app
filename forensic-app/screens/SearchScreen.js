import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import axios from "axios";
import ArticleList from "../components/ArticleList";

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
            authors: entry.acf.authors,
            citation: entry.acf.citation,
            date: new Date(entry.acf.year),
            link: entry.acf.link1,
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
        style={styles.searchbar}
        activeOutlineColor="#063970"
        value={searchText}
        onChangeText={handleSearchInput}
        onIconPress={handleSearchButton}
      />
      <ArticleList articles={articlesData} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    marginVertical: 22,
    marginHorizontal: 16,
  },
  container: {
    flex: 1,
  },
});
