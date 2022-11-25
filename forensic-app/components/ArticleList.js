import { FlatList, View, Text, StyleSheet } from "react-native";
import ArticleItem from "./ArticleItem";

export default function ArticleList({
  articles,
  onLoadMoreArticles,
  loadingMore,
}) {
  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => <ArticleItem {...item} />}
      keyExtractor={(item) => item.id}
      onEndReachedThreshold={0.1}
      onEndReached={(info) => {
        onLoadMoreArticles(info);
      }}
      ListFooterComponent={
        <View>
          {loadingMore && <Text style={styles.loading}>Loading...</Text>}
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  loading: {
    textAlign: "center",
  },
});
