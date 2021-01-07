import React, { useContext } from "react";
import { Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import BlogContext from "../contexts/BlogContext";

const PostsScreen = () => {
  const { data, createBlogPosts } = useContext(BlogContext);
  return (
    <>
      <Text>Posts will go here</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={createBlogPosts}
            style={styles.backgroundStyle}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    width: 300,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: "tomato",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
});
export default PostsScreen;
