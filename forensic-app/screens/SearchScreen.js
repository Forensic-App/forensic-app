import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

const initialArticlesData = [
  { title: "Devin" },
  { title: "Dan" },
  { title: "Dominic" },
  { title: "John" },
  { title: "James" },
  { title: "Julie" },
];

export default function SearchScreen() {
  const [searchText, setSearchText] = useState("");
  const [articlesData, setArticlesData] = useState(initialArticlesData);

  function handleSearchInput(prompt) {
    console.log(prompt);
    setSearchText(prompt);
  }

  function handleSearchButton() {
    // call api here
    const filtered = initialArticlesData.filter((article) =>
      article.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    console.log(filtered);
    setArticlesData(filtered);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <TextInput
        style={{ height: 40, width: 100, borderBottomColor: "black" }}
        placeholder="Search"
        onChangeText={handleSearchInput}
        defaultValue={searchText}
      />
      <Button title="Search" onPress={handleSearchButton} />
      <FlatList
        data={articlesData}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}