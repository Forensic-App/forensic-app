import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import axios from "axios";
import ArticleList from "../components/ArticleList";

export default function SearchScreen() {
  const [searchText, setSearchText] = useState("");
  const [articlesData, setArticlesData] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  function handleSearchInput(prompt) {
    setSearchText(prompt);
    setArticlesData([]);
  }

  function handleSearchButton() {
    setPageNo(1);
    loadPosts();
  }

  function handleLoadMore(info) {
    loadPosts();
  }

  function loadPosts() {
    if (loadingMore || allLoaded || searchText == "") return;

    setLoadingMore(true);

    axios
      .get("https://forensiclibrary.org/wp-json/wp/v2/posts", {
        params: { search: searchText.trim(), page: pageNo },
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
        setArticlesData([...articlesData, ...newArticlesData]);
        setPageNo(pageNo + 1);

        // loading complete
        setLoadingMore(false);
      })
      .catch((error) => {
        if (error.response) {
          const { data } = error.response;
          if (data.code == "rest_post_invalid_page_number") {
            setAllLoaded(true);
          }
        }
        setLoadingMore(false);
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
      <ArticleList
        articles={articlesData}
        onLoadMoreArticles={handleLoadMore}
        loadingMore={loadingMore}
      />
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
