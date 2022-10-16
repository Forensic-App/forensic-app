import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from "react-native";
import { TextInput, Button, List, MD3Colors } from 'react-native-paper';

const initialArticlesData = [
  { id: '1',
    title: "Devin" },
  { id: '2',
    title: "Dan" },
  { id: '3',
    title: "Dominic" },
  { id: '4',
    title: "John" },
  { id: '5',
    title: "James" },
  { id: '6',
    title: "Julie" },
];

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems:"flex-start"
  },
  button: {
    position: 'relative',
    bottom: -10,

  },
  item: {
    backgroundColor: '#063970',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
}
);

const MyComponent = () => {
  const [searchText, setSearchText] = React.useState("");
  const [text, setText] = React.useState("");
  const [articlesData, setArticlesData] = React.useState(initialArticlesData);

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
    <View style = {styles.container}>
      <TextInput 
        activeOutlineColor='#063970'
        label="Search"
        value={searchText}
        mode="outlined"
        onChangeText={handleSearchInput}
        defaultValue={searchText}
      />
      <Button 
         style={styles.button}
         mode="contained" 
         onPress={handleSearchButton}
         buttonColor = "#D4Af37"
         >
    Search Here
      </Button>
      <FlatList style
        data={articlesData}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MyComponent;



/**import * as React from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { TextInput } from "react-native-paper";

const initialArticlesData = [
  { title: "Devin" },
  { title: "Dan" },
  { title: "Dominic" },
  { title: "John" },
  { title: "James" },
  { title: "Julie" },
];



export default function SearchScreen=() {
  const [searchText, setSearchText] = useState("");
  const [articlesData, setArticlesData] = useState(initialArticlesData);
  const [text, setText] = React.useState("");
  
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
      style={
        styles.container
      }>
      <TextInput
        style={styles.input}
        placeholder="Search"
        label="Search"
        value={text}
        onChangeText={text => setText(text)}
        defaultValue={searchText}
        mode="flat"
      />
      <Button title="Search" onPress={handleSearchButton} />
      <FlatList
        data={articlesData}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}*/