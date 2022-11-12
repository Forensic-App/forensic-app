import { FlatList } from "react-native";
import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles }) {
  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => <ArticleItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
