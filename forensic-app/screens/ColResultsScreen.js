import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import axios from "axios";
import ArticleList from "../components/ArticleList";
import { useFocusEffect } from '@react-navigation/native';
import { useEffect } from '@react-navigation/native';
import { navigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function ResultsScreen({navigation}, props) {
  const [searchText, setSearchText] = useState("");
  const [articlesData, setArticlesData] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const route = useRoute();
  //tags still called category
  const [category, setCategory] = useState(route.params.data);
  
  
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      let category = route.params.data;
      console.log(category);
      loadPosts({
        articlesData: [], 
        searchText,
        pageNo: 1,
        category: category,
      });
    });
    return unsubscribe;
  }, [navigation, route.params?.data]);

  function handleSearchInput(prompt) {
    setSearchText(prompt);
    setArticlesData([]);
  }

  function handleSearchButton() {
    if (searchText != "") {
      loadPosts({
        articlesData: [],
        searchText,
        pageNo: 1,
        category,
      });
    }
  }

  const allowLoading = !loadingMore && !allLoaded && searchText != "";

  function handleLoadMore(info) {
    if (allowLoading)
      loadPosts({
        articlesData,
        searchText,
        pageNo,
        category,
      });
  }

  /**
   * Performs request that gets posts, manages all necessary state variables
   *
   * Note:  had to isolate state variable values into parameters
   *        because React couldn't flush state changes before function call
   */
  function loadPosts({ articlesData, searchText, pageNo, category }) {
    setArticlesData(articlesData);
    setSearchText(searchText);
    setPageNo(pageNo);
    setLoadingMore(true);

    axios
      .get("https://forensiclibrary.org/wp-json/wp/v2/posts?", {
        params: { search: searchText.trim(), page: pageNo, tags: category},
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
        setAllLoaded(false);
      })
      .catch((error) => {
        if (error.response) {
          const { data } = error.response;
          if (data.code == "rest_post_invalid_page_number") {
            setAllLoaded(true);
          } else {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
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
