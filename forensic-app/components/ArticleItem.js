import { View, Text, StyleSheet } from "react-native";
import { Linking } from "react-native";

export default function ArticleItem({ title, authors, citation, link }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title} onPress={() => Linking.openURL(link)}>
        {title}
      </Text>
      <Text style={styles.authors}>{authors}</Text>
      <Text style={styles.citation}>{citation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingBottom: 24,
    marginTop: 14,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4",
  },
  title: {
    fontSize: 14,
    color: "blue",
  },
  authors: {
    fontSize: 14,
    marginTop: 14,
  },
  citation: {
    fontSize: 14,
    marginTop: 14,
  },
});
